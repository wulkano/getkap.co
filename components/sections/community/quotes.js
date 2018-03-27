const Quote = ({ handle, name, text }) => (
  <div className="item">
    <div className="card">
      <p>{text}</p>
      <div className="quote-info">
        <span className="name">{name}</span>
        <a href={`https://twitter.com/${handle}`} className="handle">
          {handle}
        </a>
      </div>
    </div>

    <style jsx>{`
      .card {
        width: 320px;
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
          width: 100%;
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
      }
    `}</style>
  </div>
)

const QUOTES = [
  {
    handle: '@michaeldick',
    name: 'Dick',
    text:
      "My life just changed; this is exactly the screen capture app I've been needing"
  },
  {
    handle: '@mikeal',
    name: 'Mikeal Rogers',
    text:
      "This is the best screen capture app right now, if you haven't already, check it out"
  },
  {
    handle: '@timothyachumba',
    name: 'Timothy ッ',
    text: 'Kap is a must have. I use it almost every day.'
  },
  {
    handle: '@mxstbr',
    name: 'Max Stoiber',
    text:
      'Extremely impressed with the Kap 1.0 release; this is the best screen recorder ever, built with web technologies! :100:'
  },
  {
    handle: '@maxvoltar',
    name: 'Tim Van Damme',
    text: "New Kap! It's my favorite screen capture app."
  },
  {
    handle: '@michaelschultz',
    name: 'Michael Schultz',
    text: "Kap is maybe the best GIF recorder I've used so far."
  },
  {
    handle: '@ThrivingKings',
    name: 'Daniel Raftery',
    text:
      "I can't recommend Kap enough. Sprinkle your bugs/PRs with animated GIF screen captures. It's seriously awesome."
  },
  {
    handle: '@boogah',
    name: 'Jason Cosper',
    text:
      "Been looking for a nice, easy to use screen recorder. Kap seems to fit the bill. Bonus: it's open source."
  },
  {
    handle: '@jeffreydgroot',
    name: 'Jeffrey de Groot',
    text:
      'Kap makes it really easy to record and export screen captures. And it looks nice :)'
  },
  {
    handle: '@GilliSig',
    name: 'Gilli Sigurdsson',
    text:
      "I think it's safe to say that Kap creates the best gifs of any app I ever used. And best of all it's open source!"
  },
  {
    handle: '@andrewchilds',
    name: 'Andrew Childs',
    text:
      "I've tried many screen capturing tools - getkap.co is by far the easiest to use and results are high-quality 👏 @wulkanocom"
  },
  {
    handle: '@ChrisFerdinandi',
    name: 'Chris Ferdinandi',
    text: "The world's best screen capture software gets even better. getkap.co"
  },
  {
    handle: '@malweene',
    name: 'Malwinei',
    text:
      'Just installed getkap.co via homebew and Cask! Pretty hot combination. 🔥 Very impressed. Try it. Best screen recording! ✨'
  },
  {
    handle: '@cesarzeppini',
    name: 'Cesar Zeppini',
    text:
      "Very well designed screen recording app. And it's open source! getkap.co #design #opensource"
  },
  {
    handle: '@oscrse',
    name: 'Oscar Nilsson',
    text:
      "Kap is soooooo good for quick screen recordings. Can't recommend enough 👏"
  },
  {
    handle: '@mordorinc',
    name: 'Nicolas Prieto',
    text:
      'Much love to small, useful, simple and well thought apps. Thanks @wulkanocom for getkap.co!'
  },
  {
    handle: '@bitandbang',
    name: 'Tierney Cyren',
    text:
      'I use Kap daily for GIF capture, including technical demo GIFs I create for the @NodeSource blog. Highly recommend you gif it a shot! 🙌'
  },
  {
    handle: '@stephenmeszaros',
    name: 'Stephen Meszaros',
    text:
      "My go-to screen recorder for Mac just updated! Trimming, plugins and much more. Don't sleep on this."
  },
  {
    handle: '@slavakim_',
    name: 'Slava',
    text:
      'I *love* stuff like this. Solving one specific problem in a simple and compelling way getkap.co'
  },
  {
    handle: '@_albertogallego',
    name: 'Alberto Gallego',
    text:
      'I spent so much time looking something like getkap.co. The simplest way to record your screen. And easy to export. 😍'
  }
].sort(() => 0.5 - Math.random())

// TODO do this nicer
const split = (quotes, columns) => {
  let ret = []
  let index = 0

  for (let index = 0; index < columns; index++) {
    ret.push([])
  }

  for (const quote of quotes) {
    if (index === columns) index = 0
    ret[index] = [...ret[index], quote]
    index = index + 1
  }

  return ret
}

const Columns = ({ columns, quotes }) => {
  const quoteColumns = split(quotes, columns)
  return (
    <div style={{ display: 'flex' }} className="columns">
      {quoteColumns.map((column, index) => (
        <div className="column" key={index}>
          {column.map((quote, index) => (
            <Quote key={quote.handle + index} {...quote} />
          ))}
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
}

export default class Quotes extends React.Component {
  state = { columns: null }
  renderColums = () => {
    const { columns } = this.state
    if (!columns) return null
    if (columns === 1) {
      return QUOTES.map((quote, index) => (
        <Quote key={quote.handle + index} {...quote} />
      ))
    }
    return <Columns quotes={QUOTES} columns={columns} />
  }
  componentDidMount() {
    const four = window.matchMedia(`(min-width: 1400px)`)
    const three = window.matchMedia(`(min-width: 1020px)`)
    const two = window.matchMedia(`(min-width: 640px)`)
    const one = window.matchMedia(`(min-width: 320px)`)

    const setColumns = () => {
      if (four.matches) return this.setState({ columns: 4 })
      if (three.matches) return this.setState({ columns: 3 })
      if (two.matches) return this.setState({ columns: 2 })
      if (one.matches) return this.setState({ columns: 1 })
    }
    setColumns()
    four.addListener(setColumns)
    three.addListener(setColumns)
    two.addListener(setColumns)
    one.addListener(setColumns)
  }

  render() {
    return (
      <div className="grid">
        {this.renderColums()}
        <style jsx>{`
          // div {
          //   max-width: 1800px;
          //   width: 100%;

          //   display: grid;
          //   grid-auto-rows: 32px;

          //   grid-gap: 32px;
          //   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          // }
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
