'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const SearchPatients = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations('patients');

    const [searchValues, setSearchValues] = useState({
        name: searchParams.get('name') || '',
        phone: searchParams.get('phone') || '',
        civil: searchParams.get('civil') || ''
    });

    useEffect(() => {
        const params = new URLSearchParams();

        if (searchValues.name) params.set('name', searchValues.name);
        if (searchValues.phone) params.set('phone', searchValues.phone);
        if (searchValues.civil) params.set('civil', searchValues.civil);

        router.replace(`${pathname}?${params.toString()}`);
    }, [searchValues]);

    const handleChange = (field: string, value: string) => {
        setSearchValues(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            <div>
                <input
                    type="text"
                    placeholder={t('searchByName')}
                    className="border border-gray-300 text-black outline-none rounded-md px-4 py-2 w-full"
                    value={searchValues.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder={t('searchByMobile')}
                    className="border border-gray-300 text-black outline-none rounded-md px-4 py-2 w-full"
                    value={searchValues.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder={t('searchByCivilNumber')}
                    className="border border-gray-300 text-black outline-none rounded-md px-4 py-2 w-full"
                    value={searchValues.civil}
                    onChange={(e) => handleChange('civil', e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchPatients;
