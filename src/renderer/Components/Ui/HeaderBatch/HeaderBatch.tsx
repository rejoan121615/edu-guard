import React from 'react';
import Batch from '../Batch/Batch';
import Cls from './HeaderBatch.module.scss';

const HeaderBatch = ({txt, type}: {txt: string, type: string}) => {
  return (
    <div className={Cls.batch}>
      <Batch txt={txt} className='' type={type}  />
    </div>
  )
}

export default HeaderBatch