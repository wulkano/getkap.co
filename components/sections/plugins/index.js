import Section from '../section'
import Plugin from './plugin'
import styles from './plugins.module.css'

const Plugins = () => (
  <Section>
    <div className={styles.plugins}>
      <div className={styles.pluginsText}>
        <div className={styles.power}>
          <h3>The power of open-source</h3>
          <p>The ease of use and speed you’ve been looking for – the functionality and extensibility you didn’t know you needed.</p>
        </div>
      </div>

      <div className={styles.pluginsDisplay}>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <Plugin title="giphy" color="#ffd500" description="Share GIFs on Giphy" href="https://github.com/wulkano/kap-giphy" />
            <Plugin
              title="vercel"
              color="#FFF"
              description="Deploy with Vercel&nbsp;&nbsp;&nbsp;"
              href="https://github.com/delianides/kap-vercel"
            />
            <Plugin title="streamable" color="#00ffbe" description="Upload to Streamable" href="https://github.com/kevva/kap-streamable" />
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default Plugins
