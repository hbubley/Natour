import React from 'react'
import Card from '../Card/Card'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import styles from './Tours.module.scss'
const Tours = () => {
  return (
    <div className={styles.sectionTours}>
      <div className={`${styles.centerText} ${styles.marginBottomLarge}`}>
        <SecondaryHeading text={"Most Popular Tours"} />
      </div>
      <div className={styles.row}>
        <div className={`${styles.col} ${styles.col1Of3}`}>
          <Card variant={"primary"} />
        </div>
        <div className={`${styles.col} ${styles.col1Of3}`}>
          <Card variant={"secondary"} />
        </div>
        <div className={`${styles.col} ${styles.col1Of3}`}>
          <Card variant={"tertiary"} />
        </div>
      </div>
    </div>
  )
}

export default Tours