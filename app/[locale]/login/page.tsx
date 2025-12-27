import React from 'react';
import login from '@/public/images/login-img.png';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}

const Login = async ({ params }: LayoutProps) => {
  const { locale } = await params;
  const t = await getTranslations('login');

  return (
    <div className={`flex items-center justify-center min-h-screen p-4 ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="flex flex-col md:flex-row shadow-xl w-full md:w-[80%] rounded-lg overflow-hidden">

     

        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 bg-white">
          <h2 className='text-black font-bold text-xl md:text-2xl mb-4 md:mb-6 text-center md:text-start'>
            {t('title')}
          </h2>

          <form className='flex flex-col gap-4 md:gap-5'>
            <div className="flex flex-col gap-2">
              <label className='text-black text-sm md:text-base'>{t('emailLabel')}</label>
              <input
                type='email'
                placeholder={t('emailPlaceholder')}
                className='border border-gray-200 bg-white h-[45px] md:h-[49px] rounded-[10px] outline-none px-4 md:px-5 w-full'
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className='text-black text-sm md:text-base'>{t('passwordLabel')}</label>
              <input
                type='password'
                placeholder={t('passwordPlaceholder')}
                className='border border-gray-200 bg-white h-[45px] md:h-[49px] rounded-[10px] outline-none px-4 md:px-5 w-full'
              />
            </div>
          </form>

          <div className='flex flex-col gap-3 mt-4'>
            <Link href={`/${locale}/home`} className='bg-[#7451ab] text-white flex items-center justify-center h-[45px] md:h-[49px] px-4 md:px-5 cursor-pointer rounded-[10px] w-full'>
              {t('loginButton')}
            </Link>
            <Link href={`/${locale}/login-family`} className='bg-[#8e44ad] text-white flex items-center justify-center h-[45px] md:h-[49px] px-4 md:px-5 cursor-pointer rounded-[10px] w-full'>
              {t('familyLoginButton')}
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-60 md:h-auto">
          <Image
            src={login}
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Login;
