'use client'

import React, { useState } from 'react';
import Container from '../shared/formcomponents/Container';
import LatestStats from './LatestStats';
import DoctorStats from './DoctorStats';
import { useTranslations } from 'next-intl';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('latest');
    const t = useTranslations('home');

    return (
        <Container>
            <div>
                <div className="flex items-center justify-center gap-5">
                    <button
                        onClick={() => setActiveTab('latest')}
                        className={`lg:w-1/2 px-1 h-[40px] rounded-[5px] cursor-pointer 
              ${activeTab === 'latest' ? 'bg-[#7451ab] text-white' : 'bg-gray-200 text-black'}`}
                    >
                        {t('latestStatsTab')}
                    </button>
                    <button
                        onClick={() => setActiveTab('doctors')}
                        className={`lg:w-1/2 px-1 h-[40px] rounded-[5px] cursor-pointer 
              ${activeTab === 'doctors' ? 'bg-[#7451ab] text-white' : 'bg-gray-200 text-black'}`}
                    >
                        {t('doctorStatsTab')}
                    </button>
                </div>

                {activeTab === 'latest' && <LatestStats />}
                {activeTab === 'doctors' && <DoctorStats />}
            </div>
        </Container>
    );
};

export default Tabs;
