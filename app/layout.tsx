import type { Metadata } from "next";
import { Ubuntu_Mono, PT_Sans_Narrow } from "next/font/google";
import "./globals.css";
import Header from "./components/layoutComponents/Header";

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  weight: ["400"],
  subsets: ["latin"]
})

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  weight: ["400"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Akash Portfolio",
  description: "My portfolio created using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body
        className={`${ubuntuMono.variable} ${ptSansNarrow.variable} font-sans antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
