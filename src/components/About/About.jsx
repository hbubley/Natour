import React from 'react';
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading';
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.sectionAbout}>
            <div className={`${styles.centerText} ${styles.marginBottom8}`}>
                <SecondaryHeading text={"Exciting tours for adventurous people"} />
            </div>
            <div className={styles.row}>
                <div className={`${styles.col} ${styles.col1Of2}`}>
                    Text Content
                </div>
                <div className={`${styles.col} ${styles.col1Of2}`}>
                    Image Composition
                </div>
            </div>
        </div>
    )
}

export default About