import React, { useEffect ,useState } from "react";
import Image from 'next/image';
import styles from './index.module.scss'

  
const Header = ({ isDarkMode}) => {
  return (

    <div className={styles.header_div} style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <div className={styles.logo}>
          <span className={styles.span}style={{ color: isDarkMode ? 'white' : 'black' }}>Synd</span>
              <Image
                src="/O.png"
                alt="My Image"
                width={30}
                height={30}
              />       
       </div>
        <div className={styles.pages} >
            <a href="" style={{ color: isDarkMode ? 'white' : 'black' }}>page 1</a>
            <a href="" style={{ color: isDarkMode ? 'white' : 'black' }}>page 2</a>
            <a href="" style={{ color: isDarkMode ? 'white' : 'black' }}>page 3</a>  
        </div>
        <div className={styles.actions} >
          <button className={styles.login_Btn} style={{ color: isDarkMode ? 'white' : 'black' }}>Login</button>
          <button className={styles.getStarted_Btn} style={{ color: isDarkMode ? 'white' : 'black' }}>Get Started</button>
        </div>
    </div>
  )
}

export default Header;
