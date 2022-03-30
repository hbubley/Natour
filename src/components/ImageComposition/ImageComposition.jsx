import React from 'react'
import styles from './ImageComposition.module.scss'
const ImageComposition = ({image1, image2, image3}) => {
    return (
        <div className={styles.composition}>
            <img src={image1} alt="Photo 1" className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`} />
            <img src={image2} alt="Photo 2" className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`} />
            <img src={image3} alt="Photo 3" className={`${styles.compositionPhoto} ${styles.compositionPhotoP3}`} />
        </div>
    )
}

export default ImageComposition