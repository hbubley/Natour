import React from 'react'
import styles from './Card.module.scss'
import variables from '../../utilities/_variables.scss'

const Card = ({ variant, image, heading, details }) => {
    const backgroundImagePrimaryStyles = { backgroundImage: `url(${image}), linear-gradient(to right bottom, #ffb900, #ff7730)`, backgroundBlendMode: 'screen' }
    const backgroundImageSecondaryStyles = { backgroundImage: `url(${image}), linear-gradient(to right bottom, #7ed56f, #28b485)`, backgroundBlendMode: 'screen' }
    const backgroundImageTertiaryStyles = { backgroundImage: `url(${image}), linear-gradient(to right bottom, #2998ff, #5643fa)`, backgroundBlendMode: 'screen' }

    return (
        <div className={styles.card}>
            <div className={styles.cardSideFront}>
                <div
                    className={`${styles.cardPicture} ${variant === "primary" && styles.cardBackgroundColorPrimary} ${variant === "secondary" && styles.cardBackgroundColorSecondary} ${variant === "tertiary" && styles.cardBackgroundColorTertiary}`}
                    style={variant === "primary" ? backgroundImagePrimaryStyles: variant === "secondary" ? backgroundImageSecondaryStyles: backgroundImageTertiaryStyles}
                >
                </div>
                <div className={styles.cardHeading}>
                    {heading}
                </div>
                <div className={styles.cardDetails}>
                    {details}
                </div>
            </div>
            <div className={`${styles.cardSideBack} ${variant === "primary" && styles.cardBackgroundColorPrimary} ${variant === "secondary" && styles.cardBackgroundColorSecondary} ${variant === "tertiary" && styles.cardBackgroundColorTertiary}`}>
                Back
            </div>
        </div>
    )
}

export default Card