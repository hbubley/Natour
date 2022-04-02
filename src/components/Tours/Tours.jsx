import React from 'react'
import Card from '../Card/Card'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import styles from './Tours.module.scss'
import backgroundImage1 from '../../img/nat-5.jpg'
const Tours = () => {
  return (
    <div className={styles.sectionTours}>
      <div className={`${styles.centerText} ${styles.marginBottomLarge}`}>
        <SecondaryHeading text={"Most Popular Tours"} />
      </div>
      <div className={styles.row}>
        <div className={`${styles.col} ${styles.col1Of3}`}>
          <Card variant={"primary"} heading={"The sea explorer"} details={"Test"} image={backgroundImage1} />
        </div>
        <div className={`${styles.col} ${styles.col1Of3}`}>
          <Card variant={"secondary"} heading={"Test"} details={"Test"} image={backgroundImage1} />
        </div>
        <div className={`${styles.col} ${styles.col1Of3}`}>
          <Card variant={"tertiary"} heading={"Test"} details={"Test"} image={backgroundImage1} />
        </div>
      </div>
    </div>
  )
}

export default Tours