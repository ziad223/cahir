"use server";

import apiServiceCall from "./apiServiceCall";



export const getAboutComp = async (lang: string) => {
  return apiServiceCall({
    url: `home`,
    headers: { "Accept-Language": lang },
  });
};


export const getNewsComp = async (lang: string) => {
  return apiServiceCall({
    url: `news`,
    headers: { "Accept-Language": lang },
  });
};
