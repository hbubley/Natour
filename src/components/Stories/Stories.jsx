import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import Story from '../Story/Story'
import styles from './Stories.module.scss'
import image1 from '../../img/nat-8.jpg'
import image2 from '../../img/nat-9.jpg'
import bgVideo1 from '../../img/video.mp4'
import bgVideo2 from '../../img/video.webm'
const Stories = () => {
  const storyData = [
    {
      img: image1,
      name: "Mary Smith",
      title: "I had the best week ever with my family",
      details: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat."
    },
    {
      img: image2,
      name: "Jack Wilson",
      title: "My life is completely different now",
      details: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat."
    },
  ]

  return (
    <div className={styles.sectionStories}>
      <div className={styles.bgVideo}>
        <video className={styles.bgVideoContent} autoplay muted loop>
          <source src={bgVideo1} type="video/mp4" />
          <source src={bgVideo2} type="video/webm" />
          Your browser is not supported
        </video>
      </div>
      <div className={`${styles.centerText} ${styles.marginBottomLarge}`}>
        <SecondaryHeading text={"We make people genuinely happy"} />
      </div>
      {storyData.map((story) => {
        return (
          <Story img={story.img} key={story.image} name={story.name} title={story.title} details={story.details} />
        )
      })}
      <div className={`${styles.centerText} ${styles.marginTopExtraLarge}`}>
        <a href="#" className={styles.buttonText}>Read all stories &rarr;</a>
      </div>
    </div>
  )
}

export default Stories