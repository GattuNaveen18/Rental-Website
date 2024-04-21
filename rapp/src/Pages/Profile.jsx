import React from 'react';
import person from '../Components/Assets/Person1.png'
import './Profile.css'

const Profile = () => {
  return (
    <div className='pcontainer'>
      <div className='pprofile-box'>
      <span className='close-icon'>&times;</span>
            <img src ={person} alt="" className='pprofile-pic'/>
            <h1 className='ptext'>Haram</h1>
            <button type='button' className='pbutton-css'> Edit Profile</button>
            <div className='pprofile-box'>

            </div>
      </div>
    </div>
  );
};

export default Profile;
