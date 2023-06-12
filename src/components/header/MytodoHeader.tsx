import Image from 'next/image';
import React from 'react';
import momodoLogo from '../../../public/images/momodo.svg';
import calendarIcon from '../../../public/images/calendarIcon.svg';

const MytodoHeader = () => {
  return (
    <header className='flex justify-center relative mb-10 '>
      <Image src={momodoLogo} alt='모모두' width={73} className='' />
      <Image src={calendarIcon} alt='캘린더아이콘' className='absolute right-0' />
    </header>
  );
};

export default MytodoHeader;