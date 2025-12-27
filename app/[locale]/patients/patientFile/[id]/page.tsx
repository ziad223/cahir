import React from 'react';
import EditPatientForm from '../EditPatientForm';

const page = () => {
  return (
    <div className='p-10 w-[80%] mx-auto bg-white rounded-[10px] mt-10 '>
      <div className='flex items-center justify-between w-full'>
       <div>
        <p>عيادة النطق</p>
        <p className = 'my-2'>حي طويق</p>
        <p>Mobile / 0506499275</p>
       </div>
       <div>
        <p>عيادة النطق</p>
        <p className = 'mt-4'>حي طويق</p>
       </div>
      </div>
      <div className="mt-5">
      <hr/>
      </div>
      <div className="mt-10">
      <EditPatientForm/>
      </div>
    </div>
  );
}

export default page;
