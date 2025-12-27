'use client';
import React, { useState, useEffect } from 'react';
import { IoNotifications } from "react-icons/io5";
import { FaChevronDown, FaCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

const ToolBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const locale = useLocale();
    const t = useTranslations('toolbar');

    const toggleMenu = () => setShowMenu(!showMenu);

    // تحديث الوقت كل ثانية
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // تنسيق الوقت
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    // تنسيق التاريخ
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className='bg-[#7451ab] relative z-50 lg:px-20'>
            <div className="flex items-center justify-around lg:justify-center mx-auto p-2 w-full">
                <button onClick={toggleMenu} className="text-white text-2xl lg:hidden">
                    <FiMenu />
                </button>

                <div className='flex flex-col justify-center items-center w-3/4 gap-1'>
                    <h2 className='lg:text-2xl text-white font-bold'>كاشير</h2>
                    <div className='flex items-center justify-center gap-3 text-white'>
                        <span>{formatDate(currentTime)}</span>
                        <div className='bg-white w-1 h-5'></div>
                        <span className='font-mono'>{formatTime(currentTime)}</span>

                    </div>
                </div>

                <ul className="flex items-center gap-3">
                    <li><a href="#" className={`text-sm whitespace-nowrap text-white ${locale === 'ar' ? 'mr-10' : 'ml-5'}`}>{t('controlPanel')}</a></li>
                    <li><a href="#" className='text-sm text-white'><IoNotifications className='text-xl' /></a></li>

                    <li
                        className="relative flex items-center gap-2 text-sm whitespace-nowrap cursor-pointer"
                        onMouseEnter={() => setShowUserDropdown(true)}
                        onMouseLeave={() => setShowUserDropdown(false)}
                    >
                        <FaCircleUser className='w-7 h-7 text-white' />
                        <span className='text-white'>{t('admin')}</span>
                        <FaChevronDown className='text-white' />

                        {showUserDropdown && (
                            <ul className={`absolute top-full ${locale === 'ar' ? 'right-0' : 'left-0'} bg-white shadow-md rounded w-52 py-2 z-50`}>
                                <li><Link href={`/${locale}/leave-request`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('requestLeave')}</Link></li>
                                <li><Link href={`/${locale}/login`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">{t('logout')}</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className='hidden lg:block'><LanguageSelector /></li>
                </ul>
            </div>
        </div>
    );
};

export default ToolBar;