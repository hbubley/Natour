import React from 'react'
import styles from './FeatureBox.module.scss'

const FeatureBox = ({heading, paragraph, icon}) => {
    return (
        <div className={styles.featureBox}>
            <i className={`${icon} ${styles.featureBoxIcon}`} />
            <h3 className={`${styles.headingTertiary} ${styles.marginBottomSmall}`}>{heading}</h3>
            <p className={styles.featureBoxText}>
                {paragraph}
            </p>
        </div>
    )
}

export default FeatureBox