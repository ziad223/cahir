import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Kufi_Arabic } from "next/font/google";
import "../src/globals.css";
import { headers } from "next/headers";
import { routing } from "../routing";

const inter = Inter({ subsets: ["latin"] });

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-kufi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "cashir",
  description: "Your premier destination for real estate",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const currentLocale =
    headersList.get("x-next-intl-locale") || routing.defaultLocale;

  return (
    <html
      lang={currentLocale}
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={kufi.variable}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-d...=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`min-h-screen !font-kufi`}>
        {children}
      </body>
    </html>
  );
}
