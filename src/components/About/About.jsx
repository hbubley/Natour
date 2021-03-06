import React from 'react';
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading';
import TertiaryTextBlock from '../TertiaryTextBlock/TertiaryTextBlock';
import styles from './About.module.scss';
import nat1 from '../../img/nat-1-large.jpg'
import nat2 from '../../img/nat-2-large.jpg'
import nat3 from '../../img/nat-3-large.jpg'
import ImageComposition from '../ImageComposition/ImageComposition';

const About = () => {
    return (
        <div className={styles.sectionAbout}>
            <div className={`${styles.centerText} ${styles.marginBottomLarge}`}>
                <SecondaryHeading text={"Exciting tours for adventurous people"} />
            </div>
            <div className={styles.row}>
                <div className={`${styles.col} ${styles.col1Of2}`}>
                    <TertiaryTextBlock heading={"You're going to fall in love with nature"} paragraph={"Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus."} />
                    <TertiaryTextBlock heading={"Live adventures like you never have before"} paragraph={"Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                    <a href="#" className={styles.buttonText}>Learn More</a>
                </div>
                <div className={`${styles.col} ${styles.col1Of2}`}>
                    <ImageComposition image1={nat1} image2={nat2} image3={nat3} />
                </div>
            </div>
        </div>
    )
}

export default About