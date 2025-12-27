'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import sudia from '@/public/images/sudia.png';
import usa from '@/public/images/usa.png';

const LanguageSelector = () => {
  const pathname = usePathname();

  const isArabic = pathname.startsWith('/ar');
  const newLocale = isArabic ? 'en' : 'ar';

  const toggleLanguage = () => {
    const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, '');
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div
      onClick={toggleLanguage}
      className='lg:w-[80px] cursor-pointer text-sm bg-[#f2f2f2] flex items-center gap-2 justify-center px-4 h-[31px] mx-5 rounded-[21px]'
    >
      {/* <Image 
        src={isArabic ? usa : sudia} 
        alt={isArabic ? 'السعودية' : 'USA'} 
        width={20} 
        height={20} 
        className='rounded-full'
      /> */}
      <h4 className='text-[12px]'>{isArabic ? 'English' : 'العربية'}</h4>
    </div>
  );
};

export default LanguageSelector;
