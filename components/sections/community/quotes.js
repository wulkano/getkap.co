import React from 'react'
import colors from '../../../lib/colors'
import screenSizes from '../../../lib/screen-sizes'

const Quote = ({ handle, name, text }) => (
  <div className="item">
    <div className="card">
      <p>{text}</p>
      <div className="quote-info">
        <a href={`https://twitter.com/${handle}`} className="handle">
          {handle}
        </a>
      </div>
    </div>

    <style jsx>{`
      .card {
        max-width: 320px;
        border-radius: 4px;
        background-color: #f9f9f9;
        padding: 32px;
        border-radius: 4px;
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      @media only screen and (max-width: 1020px) {
        .item {
          width: 100%;
          flex: 1;
          padding: 0 8px;
        }

        .card {
          flex: 1;
          margin-bottom: 16px;
        }
      }

      @media only screen and (max-width: 640px) {
        .item {
          width: 100%;
          flex: 1;
          padding: 0 16px;
        }

        .card {
          width: 100%;
          flex: 1;
          margin-bottom: 16px;
        }
      }

      p {
        color: #000000;
        line-height: 1.43;
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 16px;
      }

      a:hover {
        text-decoration: underline;
      }

      .quote-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .name {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #000000;
      }

      .handle {
        font-size: 14px;
        font-weight: normal;
        line-height: 1.43;
        color: #808080;
        margin-left: auto;
      }
    `}</style>
  </div>
)

const QUOTES = [
  {
    handle: '@michaeldick',
    name: 'Dick',
    text: "My life just changed; this is exactly the screen capture app I've been needing",
  },
  {
    handle: '@mikeal',
    name: 'Mikeal Rogers',
    text: "This is the best screen capture app right now, if you haven't already, check it out",
  },
  {
    handle: '@timothyachumba',
    name: 'Timothy ッ',
    text: 'Kap is a must have. I use it almost every day.',
  },
  {
    handle: '@mxstbr',
    name: 'Max Stoiber',
    text: 'Extremely impressed with the Kap 1.0 release; this is the best screen recorder ever, built with web technologies! :100:',
  },
  {
    handle: '@maxvoltar',
    name: 'Tim Van Damme',
    text: "New Kap! It's my favorite screen capture app.",
  },
  {
    handle: '@michaelschultz',
    name: 'Michael Schultz',
    text: "Kap is maybe the best GIF recorder I've used so far.",
  },
  {
    handle: '@ThrivingKings',
    name: 'Daniel Raftery',
    text: "I can't recommend Kap enough. Sprinkle your bugs/PRs with animated GIF screen captures. It's seriously awesome.",
  },
  {
    handle: '@boogah',
    name: 'Jason Cosper',
    text: "Been looking for a nice, easy to use screen recorder. Kap seems to fit the bill. Bonus: it's open source.",
  },
  {
    handle: '@jeffreydgroot',
    name: 'Jeffrey de Groot',
    text: 'Kap makes it really easy to record and export screen captures. And it looks nice :)',
  },
  {
    handle: '@GilliSig',
    name: 'Gilli Sigurdsson',
    text: "I think it's safe to say that Kap creates the best gifs of any app I ever used. And best of all it's open source!",
  },
  {
    handle: '@andrewchilds',
    name: 'Andrew Childs',
    text: "I've tried many screen capturing tools - getkap.co is by far the easiest to use and results are high-quality 👏 @wulkanocom",
  },
  {
    handle: '@ChrisFerdinandi',
    name: 'Chris Ferdinandi',
    text: "The world's best screen capture software gets even better. getkap.co",
  },
  {
    handle: '@malweene',
    name: 'Malwinei',
    text: 'Just installed getkap.co via homebew and Cask! Pretty hot combination. 🔥 Very impressed. Try it. Best screen recording! ✨',
  },
  {
    handle: '@cesarzeppini',
    name: 'Cesar Zeppini',
    text: "Very well designed screen recording app. And it's open source! getkap.co #design #opensource",
  },
  {
    handle: '@oscrse',
    name: 'Oscar Nilsson',
    text: "Kap is soooooo good for quick screen recordings. Can't recommend enough 👏",
  },
  {
    handle: '@mordorinc',
    name: 'Nicolas Prieto',
    text: 'Much love to small, useful, simple and well thought apps. Thanks @wulkanocom for getkap.co!',
  },
  {
    handle: '@bitandbang',
    name: 'Tierney Cyren',
    text:
      'I use Kap daily for GIF capture, including technical demo GIFs I create for the @NodeSource blog. Highly recommend you gif it a shot! 🙌',
  },
  {
    handle: '@stephenmeszaros',
    name: 'Stephen Meszaros',
    text: "My go-to screen recorder for Mac just updated! Trimming, plugins and much more. Don't sleep on this.",
  },
  {
    handle: '@slavakim_',
    name: 'Slava',
    text: 'I *love* stuff like this. Solving one specific problem in a simple and compelling way getkap.co',
  },
  {
    handle: '@_albertogallego',
    name: 'Alberto Gallego',
    text: 'I spent so much time looking something like getkap.co. The simplest way to record your screen. And easy to export. 😍',
  },
]

const Columns = ({ columns, quotes }) => (
  <div style={{ display: 'flex' }} className="columns">
    {Array.apply(null, { length: columns }).map((_, index) => (
      <div className="column" key={`column-${index}`}>
        {quotes.filter((_, i) => i % columns === index).map(quote => <Quote key={quote.handle} {...quote} />)}
      </div>
    ))}
    <style jsx>{`
      @media only screen and (min-width: 1020px) {
        .column {
          margin: 0 16px;
        }
      }
      @media only screen and (max-width: 1020px) {
        .column {
          margin: 0 0px;
        }
        .columns {
          margin: 0 8px;
        }
      }
    `}</style>
  </div>
)

const ShowAll = ({ onClick }) => (
  <div>
    <a onClick={onClick} title="Show all quotes">
      Show all
    </a>
    <style jsx>{`
      div {
        margin: 16px;
      }
      a {
        text-transform: uppercase;
        color: white;
        width: 100%;

        margin: 16px 0;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.purple};
        padding: 16px;
        border: solid 2px #f1f1f1;
        font-size: 12px;
        font-weight: bold;

        border-radius: 4px;
        height: 48px;
      }
    `}</style>
  </div>
)

export default class Quotes extends React.Component {
  state = { columns: 0, showAll: null }

  componentDidMount() {
    const screenSizeBreaks = ['320', '640', '1020', '1400']
    const matchers = screenSizeBreaks.map(size => window.matchMedia(`(min-width: ${size}px)`))

    const setColumns = () =>
      this.setState({
        columns: matchers.reduce((columns, m, i) => (columns = m.matches ? i + 1 : columns), 1),
      })

    setColumns()
    matchers.forEach(matcher => matcher.addListener(setColumns))
  }

  render() {
    const { columns, showAll } = this.state

    const show = showAll || columns > 2
    const quotes = show ? QUOTES : QUOTES.slice(0, 2 * columns)

    return (
      <div className="grid">
        <Columns quotes={quotes} columns={columns} />
        {!show && <ShowAll onClick={() => this.setState({ showAll: true })} />}
        <style jsx>{`
          .grid {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        `}</style>
      </div>
    )
  }
}
