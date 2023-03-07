import React from 'react';
import Cls from './Batch.module.scss';

type props = {
  txt: string,
  type: string,
  className: string
}

const Batch = ( {txt, type, className}: props) => {
  return (
    <div className={`${Cls.batch} ${className} ${type === 'pink' ? Cls.pink : Cls.green}`}>{txt}</div>
  )
}

export default Batch