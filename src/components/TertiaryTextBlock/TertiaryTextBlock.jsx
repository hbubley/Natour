import React from 'react'
import styles from './TertiaryTextBlock.module.scss'
const TertiaryTextBlock = ({heading, paragraph}) => {
  return (
    <>
        <h3 className={`${styles.headingTertiary} ${styles.marginBottomSmall}`}>
           {heading}
        </h3>
        <p className={styles.paragraph}>
            {paragraph}
        </p>
    </>
  )
}

export default TertiaryTextBlock