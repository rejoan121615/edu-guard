import React from 'react';
import HeaderBatch from '../../Ui/HeaderBatch/HeaderBatch';
import Cls from './PersonalInfo.module.scss';
import CircularBorderImg from 'renderer/Components/Ui/CircularBorderImg/CircularBorderImg';
import ProfileImg from '../../../../../assets/person.jpg';

const PersonalInfo = () => {
  return (
    <div className={`src-mask shadow ${Cls.info}`}>
      <HeaderBatch type="green" txt="Personal info" />
      {/* content box  */}
      <div className={Cls.infoContent}>
        {/* profile img  */}
        <div>
          <div className={Cls.imgWrap}>
            <CircularBorderImg img={ProfileImg} />
          </div>
          <button className={` btn ${Cls.imgBtn}`}>Change Image</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
