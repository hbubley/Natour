import React from 'react'
import styles from './Header.module.scss'
import logo from '../../img/logo-white.png'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingPrimaryMain}>Outdoors</span>
          <span className={styles.headingPrimarySub}>is where life happens</span>
        </h1>
        <a href="#" className={`${styles.button} ${styles.buttonWhite} ${styles.buttonAnimated}`}>Discover our Tours</a>
      </div>
    </div>
  )
}

export default Header