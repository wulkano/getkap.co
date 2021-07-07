import Image from 'next/image'
import kapWindowImage from '../../../public/static/images/app-light.png'
import styles from './hero.module.css'

const KapWindow = () => (
  <div className={styles.window}>
    <Image src={kapWindowImage} alt="The Kap Window" />
  </div>
)

export default KapWindow
