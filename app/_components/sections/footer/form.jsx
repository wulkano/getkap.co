'use client'

import { useState } from 'react'
import Confetti from 'react-dom-confetti'
import RightArrow from '../../svg/arrow-right'
import styles from './footer.module.css'

function Input({ boom }) {
  return (
    <div className={styles.inputContainer}>
      <input type="email" id="EMAIL" name="EMAIL" placeholder="Email address" />
      <button type="submit" aria-label="Submit">
        <i className={styles.arrow}>
          <RightArrow />
        </i>
        <Confetti
          active={boom}
          config={{
            angle: 90,
            spread: 53,
            startVelocity: 51,
            elementCount: 69,
            decay: 0.91,
          }}
        />
      </button>
    </div>
  )
}

function Form() {
  const [sent, setSent] = useState(false)
  const [refocused, setRefocused] = useState(false)
  return (
    <form
      onSubmit={() => {
        if (!sent) {
          setSent(true)
          if (window.chrome) {
            window.onfocus = () => setRefocused(true)
          }
        }
      }}
      action="https://getkap.us14.list-manage.com/subscribe/post?u=318c21d4f80a3b46f22ad6ddd&amp;id=f219da06bd"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
    >
      <label className={styles.formLabel} htmlFor="EMAIL">
        Sign up for updates
      </label>
      <div>
        <Input boom={refocused} />
        <input
          style={{ position: 'absolute', left: '-59999px' }}
          type="text"
          name="b_318c21d4f80a3b46f22ad6ddd_f219da06bd"
          tabIndex="-1"
          defaultValue=""
          aria-hidden
        />
      </div>
    </form>
  )
}

export default Form
