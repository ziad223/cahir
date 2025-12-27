import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { headers } from "next/headers";

// import Footer from "@/components/shared/Footer";
import { NextIntlClientProvider } from "next-intl";
import Providers from "@/providers/providers";
import { notFound } from "next/navigation";
import { locales } from "../../navigation";
import Navbar from "@/components/navbar";
// import Navbar from "@/components/shared/Navbar";


export const metadata: Metadata = {
  title: "cashir",
  description: "Your premier destination for real estate",
  
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string | any }>;
}) {
 
    
  const resolvedParams = await (params instanceof Promise
    ? params
    : Promise.resolve(params));
  const { locale: currentLocale } = resolvedParams;

  console.log("currentLocale", currentLocale);

  if (!locales.includes(currentLocale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${currentLocale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider
      // locale={currentLocale || routing.defaultLocale}
      locale={currentLocale || "en"}
      messages={messages}
      
      timeZone="Asia/Dubai"
    >
      <Providers locale={currentLocale || "en"}>
        <div
          dir={currentLocale === "ar" ? "rtl" : "ltr"}
          lang={currentLocale}
          className="min-h-screen overflow-auto "
        >
          <Navbar />
          {children}
        </div>
      </Providers>
    </NextIntlClientProvider>
  );
}

  