import React from 'react'
import styles from './PrimaryButton.module.scss'
const PrimaryButton = ({text, variant}) => {
  return (
    <a href="#" className={`${styles.button} ${variant === "primary" && styles.buttonWhite} ${variant === "secondary" && styles.buttonGreen} ${styles.buttonAnimated}`}>{text}</a>
  )
}

export default PrimaryButton