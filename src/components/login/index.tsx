import React from 'react';
import login from '@/public/images/login-img.png';
import Image from 'next/image';
import Link from 'next/link';

const Login = ({locale} : {locale : string}) => {
  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className="flex flex-col md:flex-row shadow-xl w-full md:w-[80%] rounded-lg overflow-hidden">

        <div className="w-full md:w-1/2 h-60 md:h-auto">
          <Image
            src={login}
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 bg-white">
          <h2 className='text-black font-bold text-xl md:text-2xl mb-4 md:mb-6 text-center md:text-left'>Login</h2>

          <form className='flex flex-col gap-4 md:gap-5'>
            <div className="flex flex-col gap-2">
              <label className='text-black text-sm md:text-base'>Email</label>
              <input
                type='email'
                placeholder='email'
                className='border border-gray-200 bg-white h-[45px] md:h-[49px] rounded-[10px] outline-none px-4 md:px-5 w-full'
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className='text-black text-sm md:text-base'>Password</label>
              <input
                type='password'
                placeholder='password'
                className='border border-gray-200 bg-white h-[45px] md:h-[49px] rounded-[10px] outline-none px-4 md:px-5 w-full'
              />
            </div>
          </form>

          <div className='flex flex-col gap-3 mt-4'>
            <button className='bg-[#7451ab] h-[45px] md:h-[49px] px-4 md:px-5 cursor-pointer rounded-[10px] w-full'>
              Login
            </button>
            <Link href={`/${locale}/login-family`} className='bg-[#8e44ad] flex items-center justify-center h-[45px] md:h-[49px] px-4 md:px-5 cursor-pointer rounded-[10px] w-full'>
              Family Login
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
