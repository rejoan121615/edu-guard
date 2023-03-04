import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import Brand from '../Brand/Brand';
import Nav from '../Nav/Nav';

const Navigation = () => {
  return (
    <div>
      <Brand />
      <Nav />
    </div>
  )
}

export default Navigation;
