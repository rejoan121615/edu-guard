import React from 'react';
import Batch from 'renderer/Components/Ui/Batch/Batch';
import Cls from '../ShareCenter.module.scss';
import { FiMonitor } from 'react-icons/fi';
import ProfileImg from '../../../../../assets/person.jpg';

// type props = {
//   name: string,
//   id: number,
//   active: boolean
// }

const ComputerNode = ({
  name,
  id,
  active,
}: {
  name: string;
  id: number;
  active: boolean;
}) => {
  return (
    <div className={`${Cls.computerNode} ${active ? "" : ""}`}>
      <div className={Cls.details}>
        <FiMonitor size={22} />
        <p className={Cls.user}>
          {name} / {id}
        </p>
      </div>
      <div className={Cls.imgWrap}>
        <img src={ProfileImg} alt="Profile Picture" />
      </div>
    </div>
  );
};

const BatchMateComList = () => {
  const computerList = [
    {
      name: 'Mohd Rejoan',
      id: 1274256,
      active: true,
    },
    {
      name: 'Sadman Jahan',
      id: 1275456,
      active: true,
    },
    {
      name: 'Mahfuz Sarkar',
      id: 9844154,
      active: true,
    },
    {
      name: 'Solaiman Sukhon',
      id: 3145784,
      active: true,
    },
    {
      name: 'Mahfuza Sarkar',
      id: 1347785,
      active: true,
    },
    {
      name: 'Jogonnath Sarkar',
      id: 9637854,
      active: true,
    },
  ];

  return (
    <div className={` shadow ${Cls.cardPad} ${Cls.Computer}`}>
      <Batch className="" txt="Batch-Mate Computer List" type="green" />
      {/* computers  */}
      <div className={`${Cls.compList}`}>
        {computerList.map((com, index) => {
          return <ComputerNode {...com} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BatchMateComList;
