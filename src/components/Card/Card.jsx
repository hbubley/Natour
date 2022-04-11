import React from 'react'
import styles from './Card.module.scss'
import variables from '../../utilities/_variables.scss'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Card = ({ variant, image, headingLine1, headingLine2, details, value }) => {
    const backgroundStyles = {
        primary: {
            backgroundImage: `url(${image}), linear-gradient(to right bottom, #ffb900, #ff7730)`, 
            backgroundBlendMode: 'screen'
        },
        secondary: {
            backgroundImage: `url(${image}), linear-gradient(to right bottom, #7ed56f, #28b485)`,
            backgroundBlendMode: 'screen' 
        },
        tertiary: {
            backgroundImage: `url(${image}), linear-gradient(to right bottom, #2998ff, #5643fa)`,
            backgroundBlendMode: 'screen' 
        }
    }

    const cardStyles = {
        primary: styles.cardBackgroundColorPrimary,
        secondary: styles.cardBackgroundColorSecondary,
        tertiary: styles.cardBackgroundColorTertiary,
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.cardSideFront}>
                <div
                    className={styles.cardPicture}
                    style={backgroundStyles[variant] ? backgroundStyles[variant]: backgroundStyles.primary}
                >
                </div>
                <div className={styles.cardHeading}>
                    <span className={`${styles.cardHeadingSpan1} ${styles.cardHeadingSpan} ${cardStyles[variant] ? cardStyles[variant]: cardStyles.primary}`}>{headingLine1}</span>
                    <span className={`${styles.cardHeadingSpan2} ${styles.cardHeadingSpan} ${cardStyles[variant] ? cardStyles[variant]: cardStyles.primary}`}>{headingLine2}</span>
                </div>
                <div className={styles.cardDetails}>
                    <ul>
                        {details.map(detail => {
                            return <li key={detail}>{detail}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className={`${styles.cardSideBack} ${cardStyles[variant] ? cardStyles[variant]: cardStyles.primary}`}>
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