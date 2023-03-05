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
      url: './home'
    },
    {
      title: 'Class & Notices',
      Icon: MdGroups2,
      url: './class-&-notices'
    },
    {
      title: 'Connects',
      Icon: MdConnectWithoutContact,
      url: './connects'
    },
    {
      title: 'Share Center',
      Icon: SiWindows11,
      url: './share-center'
    },
    {
      title: 'Profile',
      Icon: BsFillPersonFill,
      url: './profile'
    },
    {
      title: 'Setting',
      Icon: IoSettingsSharp,
      url: './setting'
    },
    {
      title: 'Logout',
      Icon: MdLogout,
      url: './logout'
    },
  ];

  return (
    <div>
      {navList.map((Item, index) => {
        return (
          <NavLink to={Item.url} key={index}>
            <Item.Icon />
            <p>{Item.title}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
