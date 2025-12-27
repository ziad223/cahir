import Container from '@/components/shared/formcomponents/Container';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  params: Promise<{ locale: string | any }>; 
}
const Page = async ({ params }: LayoutProps) => {
  const t = await getTranslations('sessions');
  const { locale } = await params;

  return (
    <Container>
      <div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-bold">
            {t('sessionsTableTitle')}
          </h2>
          <Link href={`/${locale}/administration/clinics`} className="bg-gray-500 text-white rounded-sm h-[40px] px-5 flex items-center justify-center">
            {t('backToList')}
          </Link>
        </div>
        <div className="bg-white mt-10 rounded-lg p-10">
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <label>{t('chooseDoctorLabel')}</label>
              <select className="h-[40px] px-4 outline-none border border-gray-200 w-[300px] rounded-sm">
                <option hidden>{t('chooseDoctorPlaceholder')}</option>
                <option>{t('doctor1')}</option>
                <option>{t('doctor2')}</option>
                <option>{t('doctor3')}</option>
              </select>
            </div>
            <div className="flex items-center gap-10">
              <h2>
                {t('clinic')}:{' '}
                <span className="text-blue-600">
                  {t('clinicName')}
                </span>
              </h2>
              <h2>
                {t('sessionDuration')}
              </h2>
            </div>
          </div>
          <div className="bg-[#fff3cd] p-5 text-center rounded-lg w-full mt-5">
            {t('chooseDoctorFirst')}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
