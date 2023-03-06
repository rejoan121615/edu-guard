import React from 'react';
import Cls from '../ShareCenter.module.scss';

const FileProgress = () => {
  return (
    <div className={Cls.progress}>
      <p>Name: Microsoft Office 2026</p>
      {/* progress bar  */}
      <div className={Cls.bar}>
        <div className={Cls.barBg}>
          <div className={Cls.barFill}></div>
        </div>
      </div>
    </div>
  );
}

export default FileProgress