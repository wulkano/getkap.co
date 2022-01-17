import got from 'got';
import { NextApiRequest, NextApiResponse } from 'next';

type Arch = 'arm64' | 'x64';

interface Asset {
  name: string
  browser_download_url: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {arch} = req.query as { arch: Arch };

  if (arch !== 'arm64' && arch !== 'x64') {
    return res.status(400).send(`Unrecognized arch "${arch}". Expected x64 or arm64.`);
  }

  const {body} = await got.get<{assets?: Asset[]}>('https://api.github.com/repos/wulkano/kap/releases/latest', {
    responseType: 'json'
  });

  const assets = body.assets ?? [];

  const dmgArtifact = arch === 'arm64' ? arm64Asset(assets) : x64Asset(assets);
  const dmgLink = dmgArtifact?.browser_download_url;

  if (dmgLink) {
    res.writeHead(302, {
      Location: dmgLink
    });
    res.end();
  } else {
    res.status(404);
    res.send('Artifact not found');
  }
}

function arm64Asset(assets: Asset[]) {
  return assets.find(asset => asset.name.endsWith('arm64.dmg'));
}

function x64Asset(assets: Asset[]) {
  return assets.find(asset => asset.name.endsWith('x64.dmg')) ??
    // Compatibility with odler assets, when x64 was just named `Kap-x.x.x.dmg`
    assets.find(asset => asset.name.endsWith('.dmg') && !asset.name.endsWith('arm64.dmg'))
}