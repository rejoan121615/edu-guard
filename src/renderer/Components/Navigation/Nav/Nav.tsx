import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdGroups2, MdConnectWithoutContact, MdLogout } from 'react-icons/md';
import { SiWindows11 } from 'react-icons/si';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';

const Nav = () => {
  const navList = [
    {
      title: 'home',
      Icon: AiFillHome,
      url: './home',
      iconSize: '20px',
    },
    {
      title: 'Class & Notices',
      Icon: MdGroups2,
      url: './class-&-notices',
      iconSize: '20px',
    },
    {
      title: 'Connects',
      Icon: MdConnectWithoutContact,
      url: './connects',
      iconSize: '23px',
    },
    {
      title: 'Share Center',
      Icon: SiWindows11,
      url: './share-center',
      iconSize: '15px',
    },
    {
      title: 'Profile',
      Icon: BsFillPersonFill,
      url: './profile',
      iconSize: '19px',
    },
    {
      title: 'Setting',
      Icon: IoSettingsSharp,
      url: './setting',
      iconSize: '18px',
    },
    {
      title: 'Logout',
      Icon: MdLogout,
      url: './logout',
      iconSize: '18px',
    },
  ];

  return (
    <div className="nav-list">
      {navList.map((Item, index) => {
        return (
          <NavLink className={`nav-item`} to={Item.url} key={index}>
            <span className="icon" style={{ fontSize: Item.iconSize }}>
              <Item.Icon />
            </span>
            <p>{Item.title}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
