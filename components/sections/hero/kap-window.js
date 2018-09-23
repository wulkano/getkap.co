import screenSizes from '../../../lib/screen-sizes'

const KapWindow = () => (
  <div className="window">
    <img src={'/static/images/kap-3@2x.png'} alt="The Kap Window" />
    <style jsx>{`
      img {
        width: 464px;
        height: 64px;
        opacity: 1;
        user-select: none;
        user-drag: none;
      }

      .window {
        z-index: 100;
        width: 464px;
        height: 64px;
        box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.4);
        background-color: white;
        border-radius: 4px;
        position: relative;
        margin-bottom: -32px;
      }

      @media only screen and (max-width: ${screenSizes.phone}) {
        .window,
        img {
          width: 100% !important;
          height: auto;
          margin-bottom: -12px;
        }
      }
    `}</style>
  </div>
)

export default KapWindow
