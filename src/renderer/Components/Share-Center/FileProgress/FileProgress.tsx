import React from 'react';
import Cls from '../ShareCenter.module.scss';

const FileProgress = () => {
  return (
    <div className={Cls.progress}>
      <div className={Cls.titleWrap}>
        <p>Name: Microsoft Office 2026</p>
        <p className={Cls.fileSize}>3.8GB</p>
      </div>
      {/* progress bar  */}
      <div className={Cls.bar}>
        <div className={Cls.barBg}>
          <div className={Cls.barFill}></div>
        </div>
        <p className={Cls.status}>69%</p>
      </div>
    </div>
  );
};

export default FileProgress;
