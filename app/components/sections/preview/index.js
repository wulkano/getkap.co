import Image from 'next/legacy/image'
import Section from '../section'
import RightArrow from '../../svg/arrow-right'
import AppPreviewImage from '@/public/static/images/preview/kap-app-preview.png'
import styles from './preview.module.css'

const Preview = () => (
  <Section>
    <div className={styles.split}>
      <div className={styles.preview}>
        <Image
          src={AppPreviewImage}
          placeholder="blur"
          width={960}
          height={540}
          alt="Kap in Light Mode"
          className={styles.previewImage}
          layout="responsive"
        />
      </div>
      <div className={styles.container}>
        <div className={`${styles.previewDescription} ${styles.text}`}>
          <h3>More quality, less noise</h3>
          <p>Export as GIF, MP4, WebM, or APNG with optional audio, highlight clicks and trimming.</p>
          <a href="https://medium.com/wulkano-friends/from-idea-to-product-and-beyond-a12850403c38">
            <span>How Kap was built</span>
            <i class={styles.arrow}>
              <RightArrow />
            </i>
          </a>
        </div>
      </div>
    </div>
  </Section>
)

export default Preview
