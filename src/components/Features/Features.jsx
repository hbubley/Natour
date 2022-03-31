import React from 'react'
import styles from './Features.module.scss';
import icons from '../../utilities/icons/icon-font.css'
import FeatureBox from '../FeatureBox.js/FeatureBox';
const Features = () => {
  return (
    <div className={styles.sectionFeatures}>
      <div className={styles.row}>
        <div className={`${styles.col} ${styles.col1Of4}`}>
          <FeatureBox icon={"icon-basic-world"} heading={"Explore the world"} paragraph={"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta."} />
        </div>
        <div className={`${styles.col} ${styles.col1Of4}`}>
          <FeatureBox icon={"icon-basic-compass"} heading={"Meet nature"} paragraph={"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta."} />
        </div>
        <div className={`${styles.col} ${styles.col1Of4}`}>
          <FeatureBox icon={"icon-basic-map"} heading={"Find your way"} paragraph={"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta."} />
        </div>
        <div className={`${styles.col} ${styles.col1Of4}`}>
          <FeatureBox icon={"icon-basic-heart"} heading={"Live a healthier life"} paragraph={"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta."} />
        </div>
      </div>
    </div>
  )
}

export default Features