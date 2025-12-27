"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";

// import { Icon } from "@iconify/react";
// import menu from "../../public/assets/menu.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./formcomponents/Container";
import Language from "./navbar/Language";
import AsideMenu from "./navbar/AsideMenu";
import logo from "@/public/logo.svg";
import bag from "@/public/Bag.svg";
import menu from "@/public/menu.svg";
import MainLink from "@/components/shared/formcomponents/MainLink";
import useCurrentLang from "@/hooks/useCurrentLang";

const Navbar = () => {
  const { lang } = useCurrentLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations("navbar");
  const menuItems: any[] = [
    { value: t("homeLink"), path: "/" },
    { value: t("aboutUs"), path: "/about-us" },
    { value: t("contactUs"), path: "/contact-us" },
    { value: t("services"), path: "/services" },
    { value: t("news"), path: "/news" },
    { value: t("faqs"), path: "/faqs" },
    // { value: t("profile"), path: "/profile" },
    // { value: t("myAccount"), path: "/my-account" },
  ];

  // in (single blog | developer)

  const pathname = usePathname();
  let place = pathname.split("/").pop();
  // const place = "other-page"
  // // @ts-ignore

  console.log("pathname", pathname);
  console.log("place", place);

  let logoPath =
    place === "contact-us"
      ? "/logo.svg"
      : place === "developer"
      ? "/logoGold.svg"
      : "/Legacy Logo Desktop.svg";

  console.log(logoPath);
  const isSingleBlog =
    pathname.includes("blogs") && place !== undefined && place !== "blogs";
  console.log("isSingleBlog", isSingleBlog);
  if (isSingleBlog) {
    place = "single-blog";

    logoPath = "/logoBlack.svg";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   const iconColor = inSingleBlogPage
  //     ? isScrolled
  //       ? "white"
  //       : "black"
  //     : "white";

  return (
    <>
      <AsideMenu
        iconColor={"white"}
        lang={lang}
        open={open}
        setOpen={setOpen}
      />
      <div
        className={`fixed w-full z-[99] text-white ${
          isScrolled ? "!bg-black/50 backdrop-blur-sm shadow-lg" : ""
        }`}
      >
        <Container className="!py-0">
          <nav className="flex items-center justify-between pt-[20px] pb-[10px] lg:pt-[25px] lg:pb-[15px] lg:mx-auto ">
            {/* Logo - Mobile */}
            <div className="lg:hidden relative w-[54px] h-[35px]">
              <Image src={logo} alt="Logo" fill className="object-contain" />
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Logo - Desktop */}
              <div className="relative w-[72px] h-[47px]">
                <Image src={logo} alt="Logo" fill className="object-contain" />
              </div>

              {/* Menu Items */}
              <div className="flex items-center gap-8 text-[16px] font-normal">
                {menuItems.map((item, index) => (
                  <MainLink
                    key={index}
                    href={item.path}
                    className={`hover:text-[#CA9F5C] text-black transition-colors ${
                      pathname === item.path ? "text-[#CA9F5C]" : ""
                    }`}
                  >
                    {item.value}
                  </MainLink>
                ))}

                <Language className="px-0 hidden lg:flex" />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* icon */}
              <div className="relative w-11 h-6">
                <Image
                  src={bag}
                  alt="Shopping Bag"
                  width={20}
                  height={20}
                  className="object-contain w-full h-full"
                />
              </div>
              {/* Mobile Menu */}
              <button onClick={() => setOpen(true)} className="w-6 h-6 lg:hidden">
                {/* icon */}

                <Image
                  src={menu}
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-full h-full"
                />

                {/* <span className="w-[18px] h-[2px] bg-white block"></span>
                <span className="w-[18px] h-[2px] bg-white block"></span>
                <span className="w-[18px] h-[2px] bg-white block"></span> */}
              </button>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
