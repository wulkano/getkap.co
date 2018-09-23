import Form from './form'
import screenSizes from '../../../lib/screen-sizes'
const EarlyAccess = () => (
  <div className={`section`}>
    <p>
      <h3>Get early access</h3>
      <b>A brand new Kap is launching soon, sign up for the beta.</b>
    </p>
    <div className="form">
      <Form />
    </div>

    <style jsx>{`
      h3 {
        color: #000000;
        font-size: 24px;
        font-weight: normal;
        text-align: center;
        line-height: 24px;
        margin-bottom: 16px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
      b {
        height: 24px;
        color: #808080;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        line-height: 24px;
        margin-bottom: 16px;
      }
      .fill {
        width: 100vw;
        height: 100vh;
      }
      .form {
        width: 368px;
      }
      @media only screen and (max-width: ${screenSizes.laptop}) {
        .form {
          max-width: 100%;
        }
      }
      .section {
        max-width: 568px;
        width: 100%;
        margin-top: 128px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media only screen and (max-width: ${screenSizes.laptop}) {
        .section {
          padding: 0 32px;
        }
      }
    `}</style>
  </div>
)

export default EarlyAccess
