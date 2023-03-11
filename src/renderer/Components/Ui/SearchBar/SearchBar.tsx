import React from 'react';
import Cls from '../../Header/Header.module.scss';
import { BsBellFill } from 'react-icons/bs';
import ProfileImg from '../../../../assets/person.jpg';
import { BiSearch } from 'react-icons/bi';



const SearchBar = () => {
  return (
    <div className={Cls.search}>
      <input type="text" className={Cls.searchBox} />
      <button className={Cls.searchBtn}>
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
