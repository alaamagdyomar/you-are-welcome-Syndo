import React from 'react'
import peterImage from '../../assets/images/peter.png'
import greenLogo from '../../assets/images/greenLogo.png'

const Members = ({isDarkMode}) => {
  return (
    <div style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <p className='memberCard-title'>Hear It from Our Doers</p>
        <div className="member-item">
            <div className="member-card">
                <div className="member-title">
                    <img src={peterImage} alt="" />
                    <div className="member-details">
                        <span>Peter Green</span>
                        <p>Company XYZ - CEO</p>
                    </div>
                    <img clasName='green-logo' src={greenLogo} alt="" />
                </div>
                <div className="member-post">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="member-card">
                <div className="member-title">
                    <img src={peterImage} alt="" />
                    <div className="member-details">
                        <span>Peter Green</span>
                        <p>Company XYZ - CEO</p>
                    </div>
                    <img src={greenLogo} alt="" />
                </div>
                <div className="member-post">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="member-card">
                <div className="member-title">
                    <img src={peterImage} alt="" />
                    <div className="member-details">
                        <span>Peter Green</span>
                        <p>Company XYZ - CEO</p>
                    </div>
                    <img src={greenLogo} alt="" />
                </div>
                <div className="member-post">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Members