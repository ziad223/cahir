import Tabs from "@/components/tabs";

interface LayoutProps {
  params: Promise<{ locale: string | any }>; 
}




export default async function Home({ params }: LayoutProps) {
  const { locale } = await params;
  
 
  
  console.log("locale", locale);

  return (
    <div className = ''>
    <Tabs/>
    </div>
  );
}
