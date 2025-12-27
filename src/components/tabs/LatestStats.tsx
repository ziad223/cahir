
import users from '@/public/images/users.png';
import casher from '@/public/images/casher.png';
import invoice from '@/public/images/invoice.png';
import calendar from '@/public/images/calendar.png';
import allPatients from '@/public/images/all-patients.svg';
import todayUsers from '@/public/images/today-users.svg';
import visitors from '@/public/images/visitors.svg';
import todayAppointment from '@/public/images/ss.svg';
import dd from '@/public/images/dd.svg';
import Image from 'next/image';
import { useTranslations , useLocale } from 'next-intl';
import Link from 'next/link';

const LatestStats = () => {
  const t = useTranslations('home');
  const locale = useLocale()

  return (
    <div className="mt-5">
      <h2 className="text-gray-600 font-bold">{t('clinicStats')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
              <Link href={`/${locale}/patients/create`} className="border border-[#ffaf10] transition duration-300 bg-white flex flex-col sm:flex-row items-center justify-between w-full p-5 cursor-pointer hover:bg-[#ffaf10] hover:text-white">
          <h2 className="font-bold text-md mb-2 sm:mb-0">{t('addPatient')}</h2>
          <Image src={users} alt="users" />
        </Link>
        <Link href={`/${locale}/invoices/create`}  className="border border-[#7451ab] transition duration-300 bg-white flex flex-col sm:flex-row items-center justify-between w-full p-5 cursor-pointer hover:bg-[#7451ab] hover:text-white">
          <h2 className="font-bold text-md mb-2 sm:mb-0">{t('addInvoice')}</h2>
          <Image src={casher} alt="casher" />
        </Link>
        <Link href={`/${locale}/appointments/create`} className="border border-[#198754] transition duration-300 bg-white flex flex-col sm:flex-row items-center justify-between w-full p-5 cursor-pointer hover:bg-[#198754] hover:text-white">
          <h2 className="font-bold text-md mb-2 sm:mb-0">{t('addAppointment')}</h2>
          <Image src={invoice} alt="invoice" />
        </Link>
        <Link href={`/${locale}/patients`} className="border border-[#686bdf] transition duration-300 bg-white flex flex-col sm:flex-row items-center justify-between w-full p-5 cursor-pointer hover:bg-[#686bdf] hover:text-white">
          <h2 className="font-bold text-md mb-2 sm:mb-0">{t('todayAppointments')}</h2>
          <Image src={calendar} alt="calendar" />
        </Link>

        <Link href={`/${locale}/patients`} >
        <StatBox icon={allPatients} number="5" label={t('allPatients')} />
        </Link>
        <Link href={`/${locale}/patients`} >
        <StatBox icon={todayUsers} number="0" label={t('todayRegistered')} />
        </Link>

        <Link href={`/${locale}/patients`} >
        <StatBox icon={todayUsers} number="0" label={t('saudiPatients')} />
        </Link>

        <Link href={`/${locale}/patients`} >
        <StatBox icon={todayUsers} number="0" label={t('nonSaudiPatients')} small />
        </Link>
        <Link href={`/${locale}/appointments`} >
        <StatBox icon={todayAppointment} number="4" label={t('todayAppointments')} small />
        </Link>
        <Link href={`/${locale}/appointments-transferred`} >
        <StatBox icon={todayAppointment} number="4" label={t('referredPatients')} small />
        </Link>

        <Link href={`/${locale}/pay-visit`} >
        <StatBox icon={visitors} number="4" label={t('paidVisits')} small />
        </Link>

        <Link href={`/${locale}/invoices`} >
        <StatBox icon={dd} number="4" label={t('unpaidInvoices')} small />
        </Link>

      </div>
    </div>
  );
};

const StatBox = ({
  icon,
  number,
  label,
  small = false,
}: {
  icon: any;
  number: string;
  label: string;
  small?: boolean;
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full h-[150px] shadow-lg px-3 py-7 bg-white">
      <Image src={icon} alt={label} width={60} />
      <div className="flex flex-col gap-1 items-center sm:items-end mt-2 sm:mt-0">
        <h2 className="font-bold text-lg">{number}</h2>
        <h3 className={`text-gray-500 ${small ? 'text-sm' : ''}`}>{label}</h3>
      </div>
    </div>
  );
};

export default LatestStats;
  