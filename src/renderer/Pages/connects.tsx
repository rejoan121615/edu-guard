import React from 'react';
import Person from '../../../assets/person.jpg';
import ProfileCard from 'renderer/Components/Connects/ProfileCard/ProfileCard';
import Cls from './Scss/Connects.module.scss';


const Connects = () => {
  // demi person list
  const StudentList = [
    {
      img: Person,
      id: 1274256,
      name: 'Mohd Rejoan',
    },
    {
      img: Person,
      id: 1277638,
      name: 'Nasir Shah',
    },
    {
      img: Person,
      id: 1454125,
      name: 'Ananto',
    },
    {
      img: Person,
      id: 1457896,
      name: 'Saddam Hafiz Alif',
    },
    {
      img: Person,
      id: 1274256,
      name: 'Mohd Rejoan',
    },
    {
      img: Person,
      id: 1277638,
      name: 'Nasir Shah',
    },
    {
      img: Person,
      id: 1454125,
      name: 'Ananto',
    },
    {
      img: Person,
      id: 1274256,
      name: 'Mohd Rejoan',
    },
    {
      img: Person,
      id: 1277638,
      name: 'Nasir Shah',
    },
    {
      img: Person,
      id: 1454125,
      name: 'Ananto',
    },
    {
      img: Person,
      id: 1457896,
      name: 'Saddam Hafiz Alif',
    },
    {
      img: Person,
      id: 1274256,
      name: 'Mohd Rejoan',
    },
    {
      img: Person,
      id: 1277638,
      name: 'Nasir Shah',
    },
    {
      img: Person,
      id: 1454125,
      name: 'Ananto',
    },
  ];

  return <div className={Cls.list}>{
    StudentList.map((data, index) => {
      return <ProfileCard key={index} img={data.img} name={data.name} id={data.id.toString()} />
    })
  }</div>;
};

export default Connects;
