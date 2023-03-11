import React from 'react';
import Cls from '../ShareCenter.module.scss';
import Batch from 'renderer/Components/Ui/Batch/Batch';
import SearchBar from 'renderer/Components/Ui/SearchBar/SearchBar';
import { BiSearch } from 'react-icons/bi'

const SoftwareList = () => {
  return (
    <div className={`${Cls.software} shadow ${Cls.cardPad}`}>
      <header>
        <Batch
          txt="List of software that have been used"
          type="pink"
          className={Cls.batch}
        />
        <div className={Cls.search}>
          <input type="text" className={Cls.searchBox} />
          <button className={Cls.searchBtn}>
            <BiSearch />
          </button>
        </div>
      </header>
    </div>
  );
}

export default SoftwareList