import React from 'react';
import Cls from './Batch.module.scss';

type props = {
  txt: string,
  type: string
}

const Batch = ( {txt, type}: props) => {
  return (
    <div className={`${Cls.batch} ${type === 'pink' ? Cls.pink : Cls.green}`}>{txt}</div>
  )
}

export default Batch