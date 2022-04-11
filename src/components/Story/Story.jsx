import styles from './Story.module.scss'
import React from 'react'

const Story = ({ img, name, title, details }) => {
    return (
        <div className={styles.row}>
            <div className={styles.story}>
                <figure className={styles.storyShape}>
                    <img src={img} alt="bio image" className={styles.storyImage} />
                    <figcaption className={styles.storyCaption}>
                        {name}
                    </figcaption>
                </figure>
                <div className={styles.storyText}>
                    <h3 className={`${styles.headingTertiary} ${styles.marginBottomSmall}`}>
                        {title}
                    </h3>
                    <p>
                       {details}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Story