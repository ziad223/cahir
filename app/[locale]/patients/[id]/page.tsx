
import { getTranslations } from "next-intl/server";
import PatientView from "./PatientView";

const staticPatient = {
    id: 1,
    name: "محمد أحمد",
    userName: "mohamed.admin",
    caseStudiesCount: 2,
    invoicesCount: 5,
    ratesCount: 4,
    appointmentsCount: 3,
    reportsCount: 1,
    medicalReportsCount: 2,
    scanRequestsCount: 0,
    labRequestsCount: 3,
    followsCount: 2,
    ticketsCount: 1,
};

export default async function Page() {
    const t = await getTranslations('patients')
    return (
        <section className="py-5">
            <div className="container mx-auto px-4">
                <h4 className="text-2xl font-semibold mb-4">
                    {t('viewPatient')} {staticPatient.name}
                </h4>
                <div className="bg-white rounded-lg shadow p-6">
                    <PatientView patient={staticPatient} />
                </div>
            </div>
        </section>
    );
}
