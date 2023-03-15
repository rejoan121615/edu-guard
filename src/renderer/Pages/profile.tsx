import React from 'react';
import PersonalInfo from 'renderer/Components/Profile/PersonalInfo/PersonalInfo';
import Cls from './Scss/Profile.module.scss';


const Profile = () => {
  return (
    <div className={`${Cls.profile}`}>
      <PersonalInfo />
    </div>
  )
}

export default Profile;;