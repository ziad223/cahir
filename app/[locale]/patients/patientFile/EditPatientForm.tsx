import DateInput from '@/components/shared/reusableComponents/DateInput';
import RadioGroup from '@/components/shared/reusableComponents/GenderRadio';
import TextArea from '@/components/shared/reusableComponents/TextArea';
import TextInput from '@/components/shared/reusableComponents/TextInput';
import React from 'react';

const EditPatientForm = () => {
  return (
    <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <TextInput label="Civil number (10 digits)" name="childName" defaultValue="1237074100" disabled />
              <TextInput label="name" name="name" disabled defaultValue="محمد أحمد" />
              <TextInput label="phone" name="phone" disabled defaultValue="12312220239" />
              <TextInput label="Gender" name="gendar" disabled defaultValue="male" />
              <TextInput label="city" name="city" disabled defaultValue="egypt" />
              <TextInput label="group" name="group" disabled defaultValue="group" />
              <TextInput label="Date of birth Hijri" name="Date of birth Hijri" disabled defaultValue="05-12/2025" />
              <TextInput label="Age" name="Age" disabled defaultValue="26" />
              <TextInput label="Nationality" name="Nationality" disabled defaultValue="سعودي" />
              <TextInput label="File opening date" name="File opening date" disabled defaultValue="4-06-2025" />
              <TextInput label="attached file" name="attached file" disabled defaultValue="4-06-2025" />
              <div>
                <input type = 'checkbox'/>
                <span> Does the patient have medical insurance?</span>
              </div>
              <div>
                  <input type='checkbox' className = 'flex items-center gap-2' />
                  <span className = 'text-sm'>  Diabetes or does a family member suffer from it?</span>
              </div>
              <div>
                  <input type='checkbox' className = 'flex items-center gap-2' />
                  <span className = 'text-sm'>Is the patient pregnant?</span>
              </div>
              <div>
                  <input type='checkbox' className = 'flex items-center gap-2' />
                  <span className = 'text-sm'> High or low blood pressure?</span>
              </div>
          </div>
          <div className='bg-[#f0eff8] p-5 rounded-[10px] mt-5'>
              Medical information about the patient
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <RadioGroup
                  label="Do you have an allergy to penicillin or other medications ?"
                  name="geneticDiseases"
                  options={[
                      { label: "لا", value: "no" },
                      { label: "نعم", value: "yes" }
                  ]}
                  
              />
              <RadioGroup
                  label="Are you currently on medication ?"
                  name="geneticDiseases"
                  options={[
                      { label: "لا", value: "no" },
                      { label: "نعم", value: "yes" }
                  ]}

              />
          </div>
          <div className = 'mt-5'>
          <TextArea label= 'Remarks on the health record'/>
          </div>
          <div className='mt-5'>
              <TextArea label='purpose of the visit' />
          </div>
    </div>
  );
}

export default EditPatientForm;
