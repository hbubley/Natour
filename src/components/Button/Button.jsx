import React from 'react'

const Button = ({ text, variant, animated, text, onClick, link }) => {
  const _animated = animated ? styles.buttonAnimated : ''
  const _variant = primary ? styles.buttonWhite: ''
  return (
    <a href="#" className={`${styles.button} ${_variant} ${_animated}`}>{text}</a>
  )
}

export default Button