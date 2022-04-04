import React from 'react'
import styles from './Card.module.scss'
import variables from '../../utilities/_variables.scss'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Card = ({ variant, image, headingLine1, headingLine2, details, value }) => {
    const backgroundImagePrimaryStyles = { backgroundImage: `url(${image}), linear-gradient(to right bottom, #ffb900, #ff7730)`, backgroundBlendMode: 'screen' }
    const backgroundImageSecondaryStyles = { backgroundImage: `url(${image}), linear-gradient(to right bottom, #7ed56f, #28b485)`, backgroundBlendMode: 'screen' }
    const backgroundImageTertiaryStyles = { backgroundImage: `url(${image}), linear-gradient(to right bottom, #2998ff, #5643fa)`, backgroundBlendMode: 'screen' }
    console.log(styles.cardDetails)
    return (
        <div className={styles.card}>
            <div className={styles.cardSideFront}>
                <div
                    className={styles.cardPicture}
                    style={variant === "primary" ? backgroundImagePrimaryStyles : variant === "secondary" ? backgroundImageSecondaryStyles : backgroundImageTertiaryStyles}
                >
                </div>
                <div className={styles.cardHeading}>
                    <span className={`${styles.cardHeadingSpan1} ${styles.cardHeadingSpan} ${variant === "primary" && styles.cardBackgroundColorPrimary} ${variant === "secondary" && styles.cardBackgroundColorSecondary} ${variant === "tertiary" && styles.cardBackgroundColorTertiary}`}>{headingLine1}</span>
                    <span className={`${styles.cardHeadingSpan2} ${styles.cardHeadingSpan} ${variant === "primary" && styles.cardBackgroundColorPrimary} ${variant === "secondary" && styles.cardBackgroundColorSecondary} ${variant === "tertiary" && styles.cardBackgroundColorTertiary}`}>{headingLine2}</span>
                </div>
                <div className={styles.cardDetails}>
                    <ul>
                        {details.map(detail => {
                            return <li>{detail}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className={`${styles.cardSideBack} ${variant === "primary" && styles.cardBackgroundColorPrimary} ${variant === "secondary" && styles.cardBackgroundColorSecondary} ${variant === "tertiary" && styles.cardBackgroundColorTertiary}`}>
                <div className={styles.cardCTA}>
                    <div className={styles.cardPriceBox}>
                        <p className={styles.cardPriceOnly}>Only</p>
                        <p className={styles.cardPriceValue}>{value}</p>
                    </div>
                    <PrimaryButton text={"Book now"} variant={"primary"}/>
                </div>
            </div>
        </div>
    )
}

export default Card