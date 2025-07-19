'use client'
import "./globals.css";
import { Inter, Molle, Noto_Sans_Armenian, Roboto } from "next/font/google";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { QueryClientProvider } from "./provider/query-client";
import { usePathname } from "next/navigation";

const molle = Molle({
  weight: ["400"],
  subsets: ['latin'],
  variable: '--font-molle',
});

const inter = Inter({ subsets: ['latin'] })
const notoSansArmenian = Noto_Sans_Armenian({ subsets: ['armenian'] })

export default  function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) 

{
  return (
    <html lang='en'>
      <body className= {cn(inter.className, notoSansArmenian.className,molle.variable )} >
        <Suspense fallback={<div>loading ...</div>}>
          <QueryClientProvider >
              {children}
          </QueryClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
