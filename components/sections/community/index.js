import Section from '../section'
import Quotes from './quotes'
import Logos from './logos'
import screenSizes from '../../../lib/screen-sizes'

const Community = () => (
  <Section>
    <div className="root">
      <div className="text">
        <h3>Loved by the community</h3>
        <h4>Designers, developers, project managers. They all use Kap. </h4>
        <Logos />
      </div>
      <Quotes />
    </div>
    <style jsx>{`
      .text {
        margin: 128px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .root {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 64px;
      }
      h3 {
        margin-bottom: 16px;
        font-size: 32px;
        line-height: 1.5;
        font-weight: 500;
      }
      h4 {
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        text-align: center;
        max-width: 368px;
        margin-bottom: 64px;
      }
      @media only screen and (max-width: ${screenSizes.tablet}) {
        .root {
          margin-bottom: 32px;
        }

        h3,
        h4 {
          margin-left: 16px;
          margin-right: 16px;
        }
      }
    `}</style>
  </Section>
)

export default Community
