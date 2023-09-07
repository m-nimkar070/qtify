import React from 'react';
import {ReactComponent as VibrateHeadphone} from '../../assets/vibrating-headphone.svg' ;
import styles from './HeroSection.module.css' ;

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.text}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div className={styles.img}>
        <VibrateHeadphone />
      </div>
    </div>
  )
}

export default HeroSection
