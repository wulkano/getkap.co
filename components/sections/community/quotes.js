import React from 'react'
import styles from './community.module.css'

const Quote = ({ handle, name, text }) => (
  <div className={styles.item}>
    <div className={styles.card}>
      <p>{text}</p>
      <div className={styles.quoteInfo}>
        <a href={`https://twitter.com/${handle}`} className={styles.handle}>
          {handle}
        </a>
      </div>
    </div>
  </div>
)

const QUOTES = [
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
    text: 'Extremely impressed with the Kap 1.0 release; this is the best screen recorder ever, built with web technologies! 💯',
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
]

const Columns = ({ columns, quotes }) => (
  <div style={{ display: 'flex' }} className={styles.columns}>
    {Array.apply(null, { length: columns }).map((_, index) => (
      <div className={styles.column} key={`column-${index}`}>
        {quotes
          .filter((_, i) => i % columns === index)
          .map(quote => (
            <Quote key={quote.handle} {...quote} />
          ))}
      </div>
    ))}
  </div>
)

const ShowAll = ({ onClick }) => (
  <div className={styles.showAll}>
    <a className={styles.showAllLink} onClick={onClick} title="Show all quotes">
      Show all
    </a>
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

    // TODO: hide "Show all" button with CSS additionally to avoid showing on first load.
    const show = showAll || columns > 2
    const quotes = show ? QUOTES : QUOTES.slice(0, 2 * columns)

    return (
      <div className={styles.grid}>
        <Columns quotes={quotes} columns={columns} />
        {!show && <ShowAll onClick={() => this.setState({ showAll: true })} />}
      </div>
    )
  }
}
