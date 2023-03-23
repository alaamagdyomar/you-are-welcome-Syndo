import React ,{useEffect} from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

const GetStarted = ({isDarkMode}) => {
 
  return (
    <div className={styles.get_started} style={{ backgroundColor: isDarkMode ? 'black' : 'white' }} >
        <div className={styles.first_step}>
            <p className={styles.first_parag}>we’re here for you</p>
            <h1 className={styles.first_title} style={{ color: isDarkMode ? 'white' : 'black' }}>Your first step towards growth!</h1>
            <p className={styles.second_parag}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            <button className={styles.first_Btn}>Get Started</button>
        </div>
        <div className={styles.promo_dev} >
            <Image src='/images/promo.png' 
            width={700}
            height={400}
            alt="promo" 
            style={{ maxWidth: '100%' }}
            />
        </div>
    </div>
  )
}

export default GetStarted;