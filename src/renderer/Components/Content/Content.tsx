import React from 'react';
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <div id='content' className='sec-mask'>
      <Outlet />
    </div>
  )
}

export default Content