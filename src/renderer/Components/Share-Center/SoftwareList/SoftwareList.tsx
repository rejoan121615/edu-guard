import React from 'react';
import Cls from '../ShareCenter.module.scss';
import Batch from 'renderer/Components/Ui/Batch/Batch';
import SearchBar from 'renderer/Components/Ui/SearchBar/SearchBar';
import { BiSearch } from 'react-icons/bi';
import { MdDelete, MdInstallDesktop } from 'react-icons/md';
import { SiJirasoftware } from 'react-icons/si';

const Software = ({ name }: { name: string }) => {
  return (
    <div className={Cls.softwareNode}>
      <div className={Cls.softDetails}>
        <SiJirasoftware size={20} />
        <p className={Cls.name}>{name}</p>
      </div>
      <div className={Cls.controlBtn}>
        <button className={Cls.install}>
          <MdInstallDesktop size={20} />
          <p>install</p>
        </button>
        <button className={Cls.delete}>
          <MdDelete size={20} />
          <p>delete</p>
        </button>
      </div>
    </div>
  );
};

const SoftwareList = () => {
  const softList = [
    {
      name: 'MS Office 2010',
    },
    {
      name: 'Photoshop 2016',
    },
  ];

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
      <div className={`${Cls.downSoftList}`}>
        {softList.map((soft, index) => {
          return <Software key={index} {...soft} />;
        })}
      </div>
    </div>
  );
};

export default SoftwareList;
