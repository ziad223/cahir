import Link from 'next/link';
import React from 'react';


interface LayoutProps {
    params: Promise<{ locale: string | any }>;
  }

const page = async ({ params }: LayoutProps) => {
    const { locale } = await params;

  return (
    <div>
          <Link href={`/${locale}/login`} className='text-black '>Go To Login</Link>
          <Link href={`/${locale}/login-family`} className='text-black '>Go To Family Login</Link>
          <Link href={`/${locale}/patients`} className='text-black '>Go To Patients</Link>
          <Link href={`/${locale}/patients/add`} className='text-black '>Go To Add Patients</Link>

    </div>
  );
}

export default page;
