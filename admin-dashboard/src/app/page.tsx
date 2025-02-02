import React from 'react';
import NavToogle from '@/components/NavToogle';
import Sidebar from '@/components/Sidebar/Sidebar';
import MainSection from '@/components/MainSection';

const Dashboard = () => {
  return (
    <div className='bg-white flex flex-row flex-nowrap justify-center items-center gap-4 w-[100vw] h-[100vh] overflow-y-hidden overflow-x-hidden'>
      <NavToogle/>
      <Sidebar/>
      <div className='bg-green-200 w-full h-[100vh] p-[20px] overflow-y-auto'>
        <MainSection/>
      </div>
    </div>
    )
}

export default Dashboard