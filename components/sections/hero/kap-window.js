const KapWindow = () => (
  <div className="window">
    <img src={'/static/images/kap-window@2x.png'} alt="The Kap Window" />
    <style jsx>{`
      img {
        width: 320px;
        height: 180px;
        opacity: 1;
        user-select: none;
        user-drag: none;
      }
      .window {
        z-index: 100;
        width: 320px;
        height: 180px;
        box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 4px;
        position: relative;
        margin-bottom: -88px;
      }

      @media only screen and (max-width: 420px) {
        .window,
        img {
          width: 288px !important;
          height: 163px !important;
        }
      }
    `}</style>
  </div>
)

export default KapWindow
