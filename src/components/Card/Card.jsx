import React from 'react'
import styles from './Card.module.scss'
const Card = ({variant}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardSideFront}>
                Front
            </div>
            <div className={`${styles.cardSideBack} ${variant === "primary" && styles.cardBackgroundColorPrimary} ${variant === "secondary" && styles.cardBackgroundColorSecondary} ${variant === "tertiary" && styles.cardBackgroundColorTertiary}`}>
                Back
            </div>
        </div>
    )
}

export default Card