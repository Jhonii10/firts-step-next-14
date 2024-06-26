import Navbar from "@/components/navbar/Navbar";


export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <main className="flex  flex-col items-center justify-between p-16">
            <span className="text-jg">{children}</span> 
    </main>
    </> 
  );
}