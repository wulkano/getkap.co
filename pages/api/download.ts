import type { NextApiRequest, NextApiResponse } from 'next'
import got from 'got';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {body} = await got.get<any>('https://api.github.com/repos/wulkano/kap/releases/latest', {
    responseType: 'json'
  });

  const bodyAssets = body.assets || []

  let dmgArtifact

  if (req.query.system && req.query.system === 'arm64') {
    dmgArtifact = bodyAssets.find(asset => asset.name.includes('dmg'));
  } else {
    dmgArtifact = bodyAssets.find(asset => asset.name.includes('dmg') && !asset.name.includes('arm64.dmg'));
  }

  const dmgLink = dmgArtifact && dmgArtifact.browser_download_url;

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
