import React from 'react'
import styles from './index.module.scss'

const TalkCard = ({isDarkMode}) => {
  return (
    <div className={styles.talk_container} style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <div>
            <p className={styles.talk_title} style={{ color: isDarkMode ? 'white' : 'black' }}>
                Let’s talk numbers!
            </p> 
        </div>
        <div className={styles.talk_cards}>
            <div className={styles.talk_item}>
                <span className={styles.talk_span}>100</span>
                <p className={styles.talk_parag}>Rounds</p>    
            </div>
            <div className={styles.talk_item}>
                <span className={styles.talk_span}>EGP 200K</span>
                <p className={styles.talk_parag}>Total Raised</p>    
            </div>
            <div className={styles.talk_item}>
                <span className={styles.talk_span}>EGP 50K+</span>
                <p className={styles.talk_parag}>Total Raised</p>    
            </div>
            <div className={styles.talk_item}>
                <span className={styles.talk_span}>30+</span>
                <p className={styles.talk_parag}>Startups</p>    
            </div>
        </div>              
    </div>
  )
}

export default TalkCard