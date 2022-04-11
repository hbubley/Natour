import React from 'react'
import Card from '../Card/Card'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import styles from './Tours.module.scss'
import backgroundImage1 from '../../img/nat-5.jpg'
import backgroundImage2 from '../../img/nat-6.jpg'
import backgroundImage3 from '../../img/nat-7.jpg'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
const Tours = () => {
  const toursData = [
    {
      variant: 'primary',
      headingLine1: "The sea",
      headingLine2: "explorer",
      details: ["3 day tour", "up to 30 people", "2 tour guides", "sleep in cozy hotels", "difficulty: easy"],
      image: backgroundImage1,
      value: '$297'
    },
    {
      variant: 'secondary',
      headingLine1: "The forest",
      headingLine2: "hiker",
      details: ["7 day tour", "up to 40 people", "6 tour guides", "sleep in provided tents", "difficulty: medium"],
      image: backgroundImage2,
      value: '$497'
    },
    {
      variant: 'tertiary',
      headingLine1: "The snow",
      headingLine2: "adventurer",
      details: ["5 day tour", "up to 15 people", "3 tour guides", "sleep in provided tents", "difficulty: hard"],
      image: backgroundImage3,
      value: '$897'
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
            <div key={data.headingLine1} className={`${styles.col} ${styles.col1Of3}`}>
              <Card variant={data.variant} headingLine1={data.headingLine1} headingLine2={data.headingLine2} details={data.details} image={data.image} value={data.value} />
            </div>
          )
        })}
      </div>
      <div className={`${styles.centerText} ${styles.marginTopExtraLarge}`}>
        <PrimaryButton variant="secondary" text="Discover all tours" />
      </div>
    </div>
  )
}

export default Tours