// @ts-nocheck

"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

import { useTranslations } from "next-intl";
import { NavbarMenueItem } from "@/types/shared";
import RadioGroup from "@/app/components/filter/components/RadioGroup";

import Image from "next/image";

import MainLink from "@/components/shared/formcomponents/MainLink";
import Language from "./Language";

function AsideMenu({
  lang,
  iconColor,
  open,
  setOpen,
}: {
  lang: string;
  iconColor?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const t = useTranslations("navbar");

  const menuItems: NavbarMenueItem[] = [
    { value: t("homeLink"), path: "/" },
    { value: t("aboutUs"), path: "/about-us" },
    { value: t("contactUs"), path: "contact-us" },
    { value: t("news"), path: "blogs" },
    { value: t("listYourPoperty"), path: "list-your-property" },
  ];

  const menuItems2: NavbarMenueItem[] = [
    { value: t("rent"), path: "/" },
    { value: t("offPlan"), path: "/property-filter/Off%20plan?category_id=1" },
    {
      value: t("readyToMove"),
      path: "/property-filter/Ready%20to%20move?category_id=2",
    },
  ];

  return (
    <>
      {/* aside*/}
      <div
        className={`[&_*]:!text-white fixed top-0 left-0 w-[calc(100%-150px)] max-w-[350px] h-svh bg-[#00000026]/50 backdrop-blur-sm z-[100] flex justify-center items-center duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute top-5 left-5 flex gap-3 items-center justify-center cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <span>x</span> close
        </div>
        <div className="flex flex-col gap-6 items-center w-full px-8 text-xl font-medium">
          {" "}
          <ul className="flex flex-col gap-6 items-end pb-6 w-full border-b border-white">
            {menuItems?.map((item, i) => (
              <li
                key={item?.value}
                className={`translate-x-[-100%] ${
                  open ? "!translate-x-0" : ""
                }`}
                style={{ transitionDuration: `${300 * (i + 1)}ms` }}
                onClick={() => setOpen(false)}
              >
                <MainLink
                  locale={lang}
                  href={item.path}
                  className="text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.value}
                </MainLink>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-6 items-end pb-6 w-full">
            {menuItems2?.map((item, i) => (
              <li
                key={item?.value}
                className={`translate-x-[-100%] ${
                  open ? "!translate-x-0" : ""
                }`}
                style={{ transitionDuration: `${300 * (i + 2)}ms` }}
                onClick={() => setOpen(false)}
              >
                <MainLink
                  href={item.path}
                  locale={lang}
                  className="text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.value}
                </MainLink>
              </li>
            ))}
            <Language className="px-0 hidden lg:flex" />
          </ul>
        </div>
      </div>
      {open && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000000]/20 z-10 duration-500`}
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default AsideMenu;
