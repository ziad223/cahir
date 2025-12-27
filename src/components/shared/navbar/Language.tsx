"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCurrentLang from "@/hooks/useCurrentLang";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Language = ({ className }: { className?: string }) => {
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|ar)/, "")}`; // Adjust based on locales
    router.push(newPath);
  };

  const { lang } = useCurrentLang();

  return lang === "en" ? (
    <a href="/ar" className="text-black">{t("arabic")}</a>
  ) : (
    <a href="/en" className="text-black">{t("english")}</a>
  );

  // return (
  //   <>
  //     <Select onValueChange={changeLanguage}>
  //       <SelectTrigger
  //         className={`border-none outline-none bg-transparent focus:ring-0 shadow-none ${
  //           className ? className : ""
  //         }`}
  //       >
  //         <SelectValue
  //           placeholder={
  //             pathname.split("/")[1] === "en" ? t("english") : t("arabic")
  //           }
  //         />
  //       </SelectTrigger>
  //       <SelectContent>
  //         {/* <SelectItem value="en">{t("english")}</SelectItem>
  //         <SelectItem value="ar">{t("arabic")}</SelectItem> */}
  //         <div className="flex flex-col gap-2 ">
  //           <a href="/en">{t("english")}</a>
  //           <a href="/ar">{t("arabic")}</a>
  //         </div>
  //       </SelectContent>
  //     </Select>
  //   </>
  // );
};

export default Language;

// "use client"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useTranslations } from "next-intl"
// import { usePathname, useRouter } from "next/navigation"

// const Languge = ({className }: {className? : string}) => {
//     const t = useTranslations("navbar")
//     const router = useRouter()
//     const pathname = usePathname()
//     const changeLanguage = (locale: string) => {
//         const newPath = `/${locale}${pathname.replace(/^\/(en|ar)/, "")}` // Adjust based on locales
//         router.push(newPath)
//     }

//     return (
//         <>
//             {" "}
//             <Select onValueChange={changeLanguage}>
//             <SelectTrigger className={`border-none outline-none bg-transparent focus:ring-0 shadow-none ${className ? className : ""}`}>

//                 {/* <SelectTrigger className="border-none outline-none bg-transparent focus:ring-0 shadow-none"> */}
//                     <SelectValue placeholder={pathname.split("/")[1] === "en" ? t("english") : t("arabic")} />
//                 </SelectTrigger>
//                 <SelectContent>
//                     {" "}
//                     <SelectItem value="en">{t("english")}</SelectItem>
//                     <SelectItem value="ar">{t("arabic")}</SelectItem>
//                 </SelectContent>
//             </Select>
//         </>
//     )
// }

// export default Languge
