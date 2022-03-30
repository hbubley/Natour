import React from 'react'
import styles from './PrimaryButton.module.scss'
const PrimaryButton = ({text}) => {
  return (
    <a href="#" className={`${styles.button} ${styles.buttonWhite} ${styles.buttonAnimated}`}>{text}</a>
  )
}

export default PrimaryButton