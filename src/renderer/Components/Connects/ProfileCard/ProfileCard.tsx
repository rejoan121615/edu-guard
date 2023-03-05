import React from 'react';
import Cls from './ProfileCard.module.scss';

type Props = {
  img: any;
  name: String;
  id: String;
};

const ProfileCard = ({ img, name, id }: Props) => {
  return (
    <div className={Cls.card}>
      <div className={Cls.imgCon}>
        <div>
          <img src={img} alt="profile image" />
        </div>
      </div>
      <h3>{name}</h3>
      <div>
        <div>
          <span>Student ID</span>
          <p>{id}</p>
        </div>
        <div>
          <span>Batch</span>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
