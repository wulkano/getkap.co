import React from 'react'
import Section from '../section'
import Quotes from './quotes'
import Logos from './logos'
import screenSizes from '../../../lib/screen-sizes'

const Community = () => (
  <Section>
    <div className="root">
      <div className="community__heading">
        <h2>Loved by the community</h2>
        <h4>Designers, developers, project managers. They all use Kap. </h4>
        <Logos />
      </div>

      <Quotes />
    </div>
    <style jsx>{`
      .root {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 64px;
      }

      .community__heading {
        margin: 128px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .community__heading h2 {
        margin-bottom: 16px;
      }

      .community__heading h4 {
        margin-bottom: 64px;
        max-width: 368px;
        text-align: center;
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        .root {
          margin-bottom: 32px;
        }
      }
    `}</style>
  </Section>
)

export default Community
