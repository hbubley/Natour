import React from 'react'
import styles from './SecondaryHeading.module.scss'
const SecondaryHeading = ({text}) => {
    return (
        <h2 className={styles.headingSecondary}>{text}</h2>
    )
}

export default SecondaryHeading