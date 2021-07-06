import React from 'react'
import Section from '../section'
import Quotes from './quotes'
import Logos from './logos'
import styles from './community.module.css'

const Community = () => (
  <Section>
    <div className={styles.root}>
      <div className={styles.communityHeading}>
        <h2>Loved by the community</h2>
        <h4>Designers, developers, project managers. They all use Kap. </h4>
        <Logos />
      </div>

      <Quotes />
    </div>
  </Section>
)

export default Community
