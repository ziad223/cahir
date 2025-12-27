'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaCalendarAlt, FaUsers, FaAlipay, FaCcAmazonPay } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiTextSubscriptFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import ToolBar from './ToolBar';
import { FaGear } from 'react-icons/fa6';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations('Navbar');

    const hideNavbarPaths = ['/login', '/family-login', `/${locale}`];
    const shouldHideNavbar = hideNavbarPaths.some(path => pathname.startsWith(`/${locale}${path}`));

    if (shouldHideNavbar) return null;

    return (
        <>
            <ToolBar />
            <div className='bg-white'>
                <div className='lg:w-full mx-auto px-5 py-4'>
                    <div className='flex justify- items-center lg:hidden'>
                        <button onClick={toggleMenu} className='text-2xl text-black'>
                            <FiMenu />
                        </button>
                    </div>

                    <ul
                        className={`flex flex-col lg:flex-row gap-5 mt-4 lg:mt-0 
  ${menuOpen ? 'block' : 'hidden'} lg:flex justify-center items-center`}
                    >                        <li>
                            <Link href={`/${locale}`} className='text-black flex items-center gap-1 text-sm'>
                                {t('home')} <IoMdHome className='text-gray-500' />
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/settings`} className='text-black flex items-center gap-1 text-sm'>
                                {t('settings')} <FaGear className='text-gray-500' />
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/patients`} className='text-black flex items-center gap-1 text-sm'>
                                {t('patients')} <FaUsers className='text-gray-500' />
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/appointments`} className='text-black flex items-center gap-1 text-sm'>{t('appointments')} <FaCalendarAlt className='text-gray-500' /></Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/appointments`}className='text-black flex items-center gap-1 text-sm'>{t('todayAppointments')} <FaCalendarAlt className='text-gray-500' /></Link>
                        </li>
                        
                        <li>
                            <Link href={`/${locale}/invoices`} className='text-black flex items-center gap-1 text-sm'>{t('invoices')} <LiaFileInvoiceSolid className='text-gray-500' /></Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/pay-visit`} className='text-black flex items-center gap-1 text-sm'>{t('payVisit')} <FaAlipay className='text-gray-500' /></Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/treatment-plans`} className='text-black flex items-center gap-1 text-sm'>{t('subscriptions')} <PiTextSubscriptFill className='text-gray-500' /></Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/pay_package`} className='text-black flex items-center gap-1 text-sm'>{t('payPackage')} <FaCcAmazonPay className='text-gray-500' /></Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/case-study`} className='text-black flex items-center gap-1 text-sm'>{t('caseStudy')} <FaCcAmazonPay className='text-gray-500' /></Link>
                        </li>
                    </ul>
                </div>

                <div className='w-full h-2 bg-[#7451ab]'></div>
            </div>
        </>
    );
};

export default Navbar;
