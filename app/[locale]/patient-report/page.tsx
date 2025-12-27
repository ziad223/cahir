import DateInput from '@/components/shared/reusableComponents/DateInput';
import FormSection from '@/components/shared/reusableComponents/FormSection';
import RadioGroup from '@/components/shared/reusableComponents/GenderRadio';
import TextInput from '@/components/shared/reusableComponents/TextInput';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const StudyCaseForm = async () => {
    const t = await getTranslations('patients.studyCaseForm');
    return (
        <div  className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6 text-black">{t('title')}</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <FormSection title={t('sections.basicInfo')}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <TextInput label={t('fields.childName')} name="childName" defaultValue="محمد لاشين" disabled />
                        <DateInput label={t('fields.birthDate')} name="birthDate" />
                        <TextInput label={t('fields.age')} name="age" />
                        <RadioGroup
                            label={t('fields.gender')}
                            name="gendar"
                            options={[
                                { label: t('options.male'), value: "male" },
                                { label: t('options.female'), value: "female" }
                            ]}
                        />

                        <TextInput label={t('fields.nationality')} name="nationality" />
                        <TextInput label={t('fields.city')} name="city" />
                        <TextInput label={t('fields.district')} name="district" />
                        <TextInput label={t('fields.street')} name="street" />

                        <TextInput label={t('fields.guardianName')} name="guardianName" />
                        <TextInput label={t('fields.guardianRelation')} name="guardianRelation" />
                        <TextInput label={t('fields.mobile')} name="mobile" />
                        <TextInput label={t('fields.phone')} name="phone" />

                        <TextInput label={t('fields.fatherEducation')} name="fatherEducation" />
                        <TextInput label={t('fields.fatherJob')} name="fatherJob" />
                        <TextInput label={t('fields.fatherWorkplace')} name="fatherWorkplace" />

                        <TextInput label={t('fields.motherEducation')} name="motherEducation" />
                        <TextInput label={t('fields.motherJob')} name="motherJob" />
                        <TextInput label={t('fields.motherWorkplace')} name="motherWorkplace" />

                        <TextInput label={t('fields.familyMembers')} name="familyMembers" />
                        <TextInput label={t('fields.childOrder')} name="childOrder" />

                        <RadioGroup
                            label={t('fields.parentsRelation')}
                            name="parentsRelation"
                            options={[
                                { label: t('options.firstDegree'), value: "first" },
                                { label: t('options.secondDegree'), value: "second" }
                            ]}
                        />

                        <RadioGroup
                            label={t('fields.residence')}
                            name="residence"
                            options={[
                                { label: t('options.parents'), value: "parents" },
                                { label: t('options.father'), value: "father" },
                                { label: t('options.other'), value: "other" }
                            ]}
                        />

                        <TextInput label={t('fields.caretaker')} name="caretaker" />

                        <div className="md:col-span-2">
                            <RadioGroup
                                label={t('fields.socialAdaptation')}
                                name="socialAdaptation"
                                options={[
                                    { label: t('options.adapted'), value: "adapted" },
                                    { label: t('options.notAdapted'), value: "notAdapted" }
                                ]}
                            />
                        </div>

                        <div className="md:col-span-2">
                            <RadioGroup
                                label={t('fields.familyReadiness')}
                                name="familyReadiness"
                                options={[
                                    { label: t('options.ready'), value: "ready" },
                                    { label: t('options.notReady'), value: "notReady" }
                                ]}
                            />
                        </div>
                    </div>
                </FormSection>

                <FormSection title={t('sections.familyHealthHistory')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <RadioGroup
                            label={t('fields.geneticDiseases')}
                            name="geneticDiseases"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />
                    </div>
                </FormSection>

                <FormSection title={t('sections.familyGeneticHistory')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <RadioGroup
                            label={t('fields.parentsConsanguinity')}
                            name="parentsConsanguinity"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.otherDisabilities')}
                            name="otherDisabilities"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.geneticTests')}
                            name="geneticTests"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.geneticCause')}
                            name="geneticCause"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />
                    </div>
                </FormSection>

                <FormSection title={t('sections.pregnancyBirthHistory')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <RadioGroup
                            label={t('fields.motherAgeAtBirth')}
                            name="motherAgeAtBirth"
                            options={[
                                { label: t('options.under20'), value: "under20" },
                                { label: t('options.20to30'), value: "20to30" },
                                { label: t('options.over30'), value: "over30" }
                            ]}
                        />

                        <RadioGroup
                            label={t('fields.pregnancyDuration')}
                            name="pregnancyDuration"
                            options={[
                                { label: t('options.9months'), value: "9months" },
                                { label: t('options.lessThan9'), value: "lessThan9" },
                                { label: t('options.moreThan9'), value: "moreThan9" }
                            ]}
                        />

                        <RadioGroup
                            label={t('fields.diseasesBeforePregnancy')}
                            name="diseasesBeforePregnancy"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.diseasesDuringPregnancy')}
                            name="diseasesDuringPregnancy"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.fatigueDuringPregnancy')}
                            name="fatigueDuringPregnancy"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.reason')}
                        />

                        <RadioGroup
                            label={t('fields.poisoningDuringPregnancy')}
                            name="poisoningDuringPregnancy"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.accidentsDuringPregnancy')}
                            name="accidentsDuringPregnancy"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.stressDuringPregnancy')}
                            name="stressDuringPregnancy"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.vitaminsDuringPregnancy')}
                            name="vitaminsDuringPregnancy"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                        />
                    </div>
                </FormSection>
                <FormSection title={t('sections.childMedicalHistory')}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <TextInput label={t('fields.discoveryTime')} name="discoveryTime" />

                        <RadioGroup
                            label={t('fields.seriousIllness')}
                            name="seriousIllness"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.hearingProblems')}
                            name="hearingProblems"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.visionProblems')}
                            name="visionProblems"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.congenitalProblems')}
                            name="congenitalProblems"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.eatingProblems')}
                            name="eatingProblems"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.allergies')}
                            name="allergies"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.seizures')}
                            name="seizures"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.surgeries')}
                            name="surgeries"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.usesDiapers')}
                            name="usesDiapers"
                            options={[
                                { label: t('options.no'), value: "no" },
                                { label: t('options.yes'), value: "yes" }
                            ]}
                        />
                    </div>
                </FormSection>

                <FormSection title={t('sections.childDevelopmentHistory')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <RadioGroup
                            label={t('fields.languageDevelopment')}
                            name="languageDevelopment"
                            options={[
                                { label: t('options.normal'), value: "normal" },
                                { label: t('options.delayed'), value: "delayed" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.motorDevelopment')}
                            name="motorDevelopment"
                            options={[
                                { label: t('options.normal'), value: "normal" },
                                { label: t('options.delayed'), value: "delayed" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.functionalSkills')}
                            name="functionalSkills"
                            options={[
                                { label: t('options.normal'), value: "normal" },
                                { label: t('options.delayed'), value: "delayed" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />

                        <RadioGroup
                            label={t('fields.cognitiveSkills')}
                            name="cognitiveSkills"
                            options={[
                                { label: t('options.normal'), value: "normal" },
                                { label: t('options.delayed'), value: "delayed" }
                            ]}
                            withAdditionalField
                            additionalFieldLabel={t('fields.mention')}
                        />
                    </div>
                </FormSection>

                <FormSection title={t('sections.behavioralProblems')}>
                    <div className="flex flex-wrap gap-4 mt-5 mb-6">
                        <div className="w-full md:w-1/4 ">
                            <label className="text-sm font-bold mb-1 block text-black">{t('fields.childName')}</label>
                            <input
                                type="text"
                                disabled
                                value="محمد لاشين"
                                className="form-input w-full border rounded px-3 py-2 bg-gray-200 text-black"
                            />
                        </div>

                        <div className="w-full md:w-1/2 text-black">
                            <label className="text-sm font-bold block mb-2">{t('fields.age')}</label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <input
                                        type="number"
                                        className="w-14 h-8 border text-center rounded outline-none"
                                    />
                                    <label className="text-sm mx-2">{t('fields.years')}</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="number"
                                        className="w-14 h-8 border text-center rounded"
                                    />
                                    <label className="text-sm mx-2">{t('fields.months')}</label>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/4">
                            <label className="text-sm font-bold mb-1 block text-black">{t('fields.mentalLevel')}</label>
                            <input
                                type="text"
                                disabled
                                className="form-input w-full border rounded px-3 py-2 bg-gray-200\ text-black"
                            />
                        </div>
                    </div>
                </FormSection>

                <div className="overflow-x-auto ">
                    <table className="table-auto text-black w-full border border-collapse text-center">
                        <thead>
                            <tr className="bg-green-600 text-white">
                                <th className="border p-2">{t('table.no')}</th>
                                <th className="border p-2">{t('table.behavior')}</th>
                                <th className="border p-2">{t('table.no')}</th>
                                <th className="border p-2">{t('table.behavior')}</th>
                                <th className="border p-2">{t('table.no')}</th>
                                <th className="border p-2">{t('table.behavior')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['1', t('behaviors.sad'), '21', t('behaviors.screams'), '41', t('behaviors.fingerSucking')],
                                ['2', t('behaviors.shy'), '22', t('behaviors.throwsSelf'), '42', t('behaviors.nailBiting')],
                                ['3', t('behaviors.easilyUpset'), '23', t('behaviors.rambles'), '43', t('behaviors.eatsDirt')],
                                ['4', t('behaviors.isolates'), '24', t('behaviors.hits'), '44', t('behaviors.hairPulling')],
                                ['5', t('behaviors.cries'), '25', t('behaviors.swears'), '45', t('behaviors.genitalPlay')],
                                ['6', t('behaviors.fearPeople'), '26', t('behaviors.destroysFurniture'), '46', t('behaviors.exposes')],
                                ['7', t('behaviors.fearAnimals'), '27', t('behaviors.hitsAndStops'), '47', t('behaviors.neglectsHomework')],
                                ['8', t('behaviors.fearOther'), '28', t('behaviors.bites'), '48', t('behaviors.schoolAvoidance')],
                                ['9', t('behaviors.selfHarm'), '29', t('behaviors.steals'), '49', t('behaviors.attachedToFather')],
                                ['10', t('behaviors.wakesFrightened'), '30', t('behaviors.argues'), '50', t('behaviors.attachedToMother')],
                                ['11', t('behaviors.nightmares'), '31', t('behaviors.screamsOnWake'), '51', t('behaviors.notDressPublic')],
                                ['12', t('behaviors.oversleeps'), '32', t('behaviors.oversleeps'), '52', t('behaviors.poorEating')],
                                ['13', t('behaviors.wakesEarly'), '33', t('behaviors.wakesEarly'), '53', t('behaviors.eatsBites')],
                                ['14', t('behaviors.noAnger'), '34', t('behaviors.showsAnger'), '54', t('behaviors.criesEasily')],
                                ['15', t('behaviors.defendsSelf'), '35', t('behaviors.defendsSelf'), '55', t('behaviors.disobeys')],
                                ['16', t('behaviors.selfTalk'), '36', t('behaviors.selfTalk')],
                                ['17', t('behaviors.noResponse'), '37', t('behaviors.laughsAlone')],
                                ['18', t('behaviors.hyperactive'), '38', t('behaviors.noResponse')],
                                ['19', t('behaviors.persistentActivity'), '39', t('behaviors.persistentActivity')],
                                ['20', t('behaviors.excessiveMovement'), '40', t('behaviors.excessiveMovement')],
                            ].map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, i) => (
                                        <td key={i} className="border p-1">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6">
                    <label className="text-sm font-bold block mb-2 text-black">
                        {t('fields.otherNotes')}
                    </label>
                    <textarea
                        className="form-textarea w-full h-24 border rounded p-2 text-black"
                        placeholder={t('fields.writeHere')}
                    ></textarea>
                    <button className='bg-blue-500 text-white lg:w-[200px] rounded-[19px] cursor-pointer mt-5 h-[49px] px-10'>
                        {t('saveReport')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudyCaseForm;