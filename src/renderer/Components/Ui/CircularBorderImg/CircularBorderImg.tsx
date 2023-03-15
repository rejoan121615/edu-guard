import React from 'react';
import Cls from './CircularBorderImg.module.scss';

const CircularBorderImg = ({img} : {img: string}) => {
  return (
    <div className={Cls.imgCon}>
      <div className={Cls.imgWrap}>
        <img src={img} alt="profile image" />
      </div>
    </div>
  );
}

export default CircularBorderImg