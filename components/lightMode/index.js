import React ,{useState} from "react";
import Switch from '@mui/material/Switch';
import styles from './index.module.scss'


const LightMode = ({isDarkMode , handleToggle}) => {

 // const handleToggle = (event) => {
  //   setIsDarkMode(event.target.checked);
  //   console.log(event.target.checked)
  //   if (event.target.checked === false) {
  //     // Trigger your action here
  //     console.log("Switch turned off!");
  //   }
  // };


  return (
    <div className={styles.light_Mode} >
          <span>Light Mode</span>       
            <Switch checked={isDarkMode} onChange={handleToggle} />
          </div>
  );
};

export default LightMode;