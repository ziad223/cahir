"use client";

import React from "react";
import { Patient } from "./PatientView";
import Table, { Column } from "@/components/shared/reusableComponents/Table";
import { useTranslations } from "next-intl";

interface Props {
  screen: string;
  patient: Patient;
}

export default function ScreenContent({ screen, patient }: Props) {
  const t = useTranslations("patients");

  const basicInfoColumns: Column[] = [
    { label: t("medicalNumber"), key: "id" },
    { label: t("name"), key: "name" },
    { label: t("civilNumber"), key: "civil_number" },
    { label: t("nationality"), key: "Nationality" },
    { label: t("group"), key: "group" },
    { label: t("gender"), key: "Gender" },
    { label: t("dobAD"), key: "Date_of_birth_AD" },
    { label: t("dobHijri"), key: "Date_of_birth_Hijri" },
    { label: t("age"), key: "Age" },
  ];

  const basicInfoData = [
    {
      id: patient.id,
      name: patient.name,
      civil_number: "1237074100",
      Nationality: "سعودي",
      group: "yes",
      Gender: "ذكر",
      Date_of_birth_AD: "05-2-2025",
      Date_of_birth_Hijri: "05-10-2025",
      Age: "26",
    },
  ];

  switch (screen) {
    case "data":
      return (
        <div>
          <h3 className="font-semibold mb-2 text-lg">{t("basicInfo")}</h3>
          <Table columns={basicInfoColumns} data={basicInfoData} />
        </div>
      );
    case "caseStudy":
      return (
        <div className="flex justify-between w-full">
          📊 {t("caseStudy")}: {patient.caseStudiesCount}{" "}
          {t("items", { count: patient.caseStudiesCount })}
        </div>
      );
    case "subscriptions":
      return (
        <div className="flex items-center justify-between w-full">
          🩺 {t("subscriptions")}: {patient.caseStudiesCount}
        </div>
      );
    case "invoices":
      return <div>📃 {t("invoices")}: {patient.invoicesCount}</div>;
    case "rate":
      return <div>⭐ {t("rate")}: {patient.ratesCount}</div>;
    case "appointments":
      return <div>📅 {t("appointments")}: {patient.appointmentsCount}</div>;
    case "reports":
      return <div>📝 {t("reports")}: {patient.reportsCount}</div>;
    case "medical_reports":
      return <div>📅 {t("medical_reports")}: {patient.medicalReportsCount}</div>;
    case "scans":
      return <div>🚑 {t("scans")}: {patient.scanRequestsCount}</div>;
    case "labs":
      return <div>🧪 {t("labs")}: {patient.labRequestsCount}</div>;
    case "follow":
      return <div>🔄 {t("follow")}: {patient.followsCount}</div>;
    case "tickets":
      return <div>✉️ {t("tickets")}: {patient.ticketsCount}</div>;
    case "home-treatment":
      return <div>🏠 {t("homeTreatmentDetails")}</div>;
    case "contact":
      return (
        <div>
          <p>📞 {t("phone")}: +123456789</p>
          <p>📧 {t("email")}: example@example.com</p>
        </div>
      );
    default:
      return <div>{t("unknownTab")}</div>;
  }
}
