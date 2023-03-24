import React ,{useEffect} from 'react'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import styles from './index.module.scss'


const Rounds = ({isDarkMode}) => {
  
  useEffect(()=>{
    console.log('isDarkmode ====', isDarkMode)
  },[isDarkMode])

  return (
    <div className={styles.rounds_container}  style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <div className={styles.rounds_title}  style={{ color: isDarkMode ? 'white' : 'black' }}>
            <p>Explore Current Rounds</p>
        </div>
        <div className={styles.cards}>
            <div className={styles.card_item}>
                <div className={styles.card_header}>
                      <div className={styles.card_image}>
                        <Image className={styles.background_image} src='/images/firstRound.png' width={514} height={262} alt="" />
                        <Image className={styles.profile_Image} src='/images/Delta.png' width={96} height={97} alt="" />
                        <button className={styles.profileBtn}>Pre-Seed</button>
                      </div>
                </div>
                <div className={styles.card_content} style={{ color: isDarkMode ? 'white' : 'black' }}>
                      <h3 className={styles.content_title}>Telda</h3>
                      <p className={styles.content_parag}>Syndo derived from syndication and is here to bridge the gap between Business Owners and Investors. </p>
                      <div className={styles.content_Btns}>
                          <button className={styles.first_Btn}>Finteck</button>
                          <button className={styles.second_Btn} >Equity </button>
                      </div>
                </div>
                <div className={styles.card_footer} >
                  <div className={styles.avatar_items}>
                  <AvatarGroup max={4}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </AvatarGroup>
                  </div>
                  <div className={styles.avatar_data}>
                      <p className={styles.avatar_p}>Followed by <span className={styles.span} >Mohamed Aziz</span>  and <span className={styles.span}>12 others</span></p>
                  </div>
                </div>    
            </div>  
            <div className={styles.card_item}>
                <div className={styles.card_header}>
                      <div className={styles.card_image}>
                        <Image className={styles.background_image} src='/images/firstRound.png' width={514} height={262} alt="" />
                        <Image className={styles.profile_Image} src='/images/Delta.png' width={96} height={97} alt="" />
                        <button className={styles.profileBtn}>Pre-Seed</button>
                      </div>
                </div>
                <div className={styles.card_content} style={{ color: isDarkMode ? 'white' : 'black' }}>
                      <h3 className={styles.content_title}>Telda</h3>
                      <p className={styles.content_parag}>Syndo derived from syndication and is here to bridge the gap between Business Owners and Investors. </p>
                      <div className={styles.content_Btns}>
                          <button className={styles.first_Btn}>Finteck</button>
                          <button className={styles.second_Btn} >Equity </button>
                      </div>
                </div>
                <div className={styles.card_footer} >
                  <div className={styles.avatar_items}>
                  <AvatarGroup max={4}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </AvatarGroup>
                  </div>
                  <div className={styles.avatar_data}>
                      <p className={styles.avatar_p}>Followed by <span className={styles.span} >Mohamed Aziz</span>  and <span className={styles.span}>12 others</span></p>
                  </div>
                </div>    
            </div>      
            <div className={styles.card_item}>
                <div className={styles.card_header}>
                      <div className={styles.card_image}>
                        <Image className={styles.background_image} src='/images/firstRound.png' width={514} height={262} alt="" />
                        <Image className={styles.profile_Image} src='/images/Delta.png' width={96} height={97} alt="" />
                        <button className={styles.profileBtn}>Pre-Seed</button>
                      </div>
                </div>
                <div className={styles.card_content} style={{ color: isDarkMode ? 'white' : 'black' }}>
                      <h3 className={styles.content_title}>Telda</h3>
                      <p className={styles.content_parag}>Syndo derived from syndication and is here to bridge the gap between Business Owners and Investors. </p>
                      <div className={styles.content_Btns}>
                          <button className={styles.first_Btn}>Finteck</button>
                          <button className={styles.second_Btn} >Equity </button>
                      </div>
                </div>
                <div className={styles.card_footer} >
                  <div className={styles.avatar_items}>
                  <AvatarGroup max={4}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </AvatarGroup>
                  </div>
                  <div className={styles.avatar_data}>
                      <p className={styles.avatar_p}>Followed by <span className={styles.span} >Mohamed Aziz</span>  and <span className={styles.span}>12 others</span></p>
                  </div>
                </div>    
            </div>               
        </div>          
    </div>
  )
}

export default Rounds;