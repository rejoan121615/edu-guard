import React from 'react';
import UploadComponent from 'renderer/Components/Share-Center/upload/UploadComponent';
import DownloadComponent from 'renderer/Components/Share-Center/download/DownloadComponent';
import BatchMateComList from 'renderer/Components/Share-Center/batchMates/BatchMateComList';
import SoftwareList from 'renderer/Components/Share-Center/SoftwareList/SoftwareList';
import Cls from './Scss/ShareCenter.module.scss';

const ShareCenter = () => {
  return (
    <div className='contentWrap'>
      <div className={Cls.parent}>
        <UploadComponent />
        <DownloadComponent />
        <BatchMateComList />
        <SoftwareList />
      </div>
    </div>
  );
};

export default ShareCenter;
