import Image from 'next/image';
import React from 'react';
import ProfileImg from './ProfileImg';
import tierIcon1 from '../../public/images/tierIcon-red-1.svg';
import FollowNumber from './FollowNumber';

const UserProfile = ({ option }) => {
  return (
    <section className='flex items-center justify-between px-5'>
      <div className='flex items-center'>
        <ProfileImg width={45} height={45} alt='프로필 이미지' />
        <div className='flex flex-col ml-2'>
          <p className='leading-tight'>username</p>
          <span className='text-xxs'>FE Dev</span>
        </div>
      </div>
      {option === 'follow' ? (
        <div className='flex flex-row gap-6'>
          <FollowNumber number={0} title={'팔로워'} />
          <FollowNumber number={0} title={'팔로잉'} />
        </div>
      ) : (
        <Image width={51} height={37} src={tierIcon1} alt='티어 1단계' className='ml-auto' />
      )}
    </section>
  );
};

export default UserProfile;