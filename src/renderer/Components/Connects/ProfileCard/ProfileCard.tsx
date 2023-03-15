import React from 'react';
import Cls from './ProfileCard.module.scss';
import { BsMessenger } from 'react-icons/bs';
import { CgDetailsMore } from 'react-icons/cg';
import CircularBorderImg from 'renderer/Components/Ui/CircularBorderImg/CircularBorderImg';

type Props = {
  img: any;
  name: String;
  id: String;
};

const ProfileCard = ({ img, name, id }: Props) => {
  return (
    <div className={Cls.card}>
      <div className={Cls.imgWrap}>
        <CircularBorderImg img={img} />
      </div>
      <h3 className={Cls.name}>{name}</h3>
      <div className={Cls.details}>
        <div className={Cls.cell}>
          <p className={Cls.title}>Student ID</p>
          <p className={Cls.value}>{id}</p>
        </div>
        <div className={Cls.cell}>
          <p className={Cls.title}>Batch</p>
          <p className={Cls.value}>55</p>
        </div>
      </div>
      <div className={Cls.btnList}>
        <button className={Cls.btn}>
          <BsMessenger size={16} />
          <p>Message</p>
        </button>
        <button className={Cls.btn}>
          <CgDetailsMore size={18} />
          <p>Details</p>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
