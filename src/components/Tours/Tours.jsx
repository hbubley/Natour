import React from 'react'
import Card from '../Card/Card'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import styles from './Tours.module.scss'
import backgroundImage1 from '../../img/nat-5.jpg'
const Tours = () => {
  const toursData = [
    {
      variant: 'primary',
      headingLine1: "The sea",
      headingLine2: "explorer",
      details: ["3 day tours", "up to 30 people", "2 hour guides", "sleep in cozy hotels", "difficulty: easy"],
      image: backgroundImage1,
    },
    {
      variant: 'secondary',
      headingLine1: "The sea",
      headingLine2: "explorer",
      details: ["3 day tours", "up to 30 people", "2 hour guides", "sleep in cozy hotels", "difficulty: easy"],
      image: backgroundImage1,
    },
    {
      variant: 'tertiary',
      headingLine1: "The sea",
      headingLine2: "explorer",
      details: ["3 day tours", "up to 30 people", "2 hour guides", "sleep in cozy hotels", "difficulty: easy"],
      image: backgroundImage1,
    },
  ]
  return (
    <div className={styles.sectionTours}>
      <div className={`${styles.centerText} ${styles.marginBottomLarge}`}>
        <SecondaryHeading text={"Most Popular Tours"} />
      </div>
      <div className={styles.row}>
        {toursData.map((data) => {
          return (
            <div className={`${styles.col} ${styles.col1Of3}`}>
              <Card variant={data.variant} headingLine1={data.headingLine1} headingLine2={data.headingLine2} details={data.details} image={data.image} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tours