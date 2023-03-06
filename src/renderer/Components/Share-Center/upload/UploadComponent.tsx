import React from 'react';
import Cls from '../ShareCenter.module.scss';
import Batch from 'renderer/Components/Ui/Batch/Batch';
import { MdCloudUpload } from 'react-icons/md';
import FileProgress from '../FileProgress/FileProgress';

const UploadComponent = () => {
  return (
    <div className={` shadow ${Cls.upload}`}>
      <Batch txt="Upload" type="green" />
      {/* upload function  */}
      <div className={Cls.FileWrap}>
        <MdCloudUpload className={Cls.icon} />
        <p>Click for upload or drag and drop here</p>
      </div>
      {/* progress  */}
      <div className={Cls.ongoing}>
        <Batch txt="On-going upload" type="green" />
        <FileProgress />
      </div>
    </div>
  );
};

export default UploadComponent;
