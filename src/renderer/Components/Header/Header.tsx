import React from 'react';
import Cls from './Header.module.scss';
import { BsBellFill } from 'react-icons/bs';
import ProfileImg from '../../../../assets/person.jpg';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
  return (
    <div id="header" className={`sec-mask ${Cls.header}`}>
      {/* search bar  */}
      <div className={Cls.search}>
        <input type="text" className={Cls.searchBox} />
        <button className={Cls.searchBtn}>
          <BiSearch />
        </button>
      </div>
      {/* bell  */}
      <div className={Cls.notification}>
        <button className={Cls.notBtn}>
          <div className={Cls.status}></div>
          <BsBellFill />
        </button>
        {/* notification list  */}
      </div>
      {/* profile  */}
      <div className={Cls.profile}>
        <img src={ProfileImg} alt="Profile Img" />
      </div>
    </div>
  );
}

export default Header