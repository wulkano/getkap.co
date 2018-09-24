import colors from '../../../lib/colors'
import WulkanoLogo from '../../../static/images/logos/wulkano.svg'

const WulkanoAndFriends = () => (
  <div className="container">
    <a
      href="https://wulkano.com"
      title="Wulkano"
      target="_blank"
      rel="noopener"
    >
      <WulkanoLogo />
    </a>

    <a
      className="friends"
      href="https://github.com/wulkano/kap/contributors"
      target="_blank"
      rel="noopener"
    >
      &amp; friends
    </a>

    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        width: 152px;
        margin-top: -1.6rem;
      }

      .friends {
        margin-left: 32px;
      }

      a {
        color: #000;
        font-size: 1.6rem;
        font-weight: normal;
      }

      a.friends:hover {
        color: ${colors.purple};
        ${`cursor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOCIgc3R5bGU9ImZvbnQtc2l6ZToxNHB4Ij48dGV4dCB5PSIxNiI+4p2k77iPPC90ZXh0Pjwvc3ZnPg==),auto!important;`};
      }
    `}</style>
  </div>
)

export default WulkanoAndFriends
