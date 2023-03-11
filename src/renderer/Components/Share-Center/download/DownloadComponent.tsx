import React from 'react';
import Cls from '../ShareCenter.module.scss';
import Batch from 'renderer/Components/Ui/Batch/Batch';
import { MdCloudDownload } from 'react-icons/md';
import FileProgress from '../FileProgress/FileProgress';

const DownloadComponent = () => {
  return (
    <div className={` shadow ${Cls.upload}`}>
      <Batch className="" txt="Download" type="pink" />
      {/* upload function  */}
      <div className={Cls.FileWrap}>
        <MdCloudDownload className={Cls.downloadIcon} />
        <p>Click to see downloadable software</p>
      </div>
      {/* progress  */}
      <div className={Cls.ongoing}>
        <Batch txt="On-going download" type="pink" className={Cls.batch} />
        <FileProgress />
      </div>
    </div>
  );
};

export default DownloadComponent;
