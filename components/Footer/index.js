import React from 'react'
import Image from 'next/image';
import styles from './index.module.scss'

const Footer = ({isDarkMode}) =>{
  return (
    <div className={styles.footer_container}  style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <div className={styles.footer_up} style={{ color: isDarkMode ? 'white' : 'black' }}>
           <div className={styles.company_details}>
                <div className={styles.syndo}>
                  <span className={styles.syndo_span}>Synd</span>
                  <Image src='/O.png' width={30} height={30} alt="" />
                </div>
                <span> created by angels for angels</span>
                <div className='policy-div'>
                    <span>Privacy Policy</span>
                    <span>Legal Terms</span>
                </div>       
           </div>
           <div className="company-home">
                <span>Home</span>
                <p>For Investors</p>
                <p> For Companies</p>
           </div>
           <div className="company-about">
                <span>About us</span>
                <p>   About us</p>
                <p>   Risk</p>
           </div>
           <div className="resources">
                <span>resources</span>
                <p>   FAQs </p>
                <p>   Contact Us</p>
           </div>
           <div className="language">
              <span>Eng   ^</span>
           </div>
        </div>
        <div className={styles.footer_down} style={{ color: isDarkMode ? 'white' : 'black' }}>
            <p>The Syndo credit & risk grading system is not a measure of the quality of the investment and is not meant to replace individual due diligence. Syndo’s credit & risk grading system is a feasibility study on the company and should not be considered a guarantee or a promise on future performance. Historical data is used to assess the possibility of default and not eliminate risk. Ratings are for informational purposes only. Ratings are not individualized for any specific investor’s financial situation and should not be considered investment advice. Each investor should carefully consider investments in any loan with his/her understanding of the investment.© 2022 syndo. All rights reserved</p>
            <span>© 2022 syndo. All rights reserved </span>
        </div>
    </div>
  )
}

export default Footer;