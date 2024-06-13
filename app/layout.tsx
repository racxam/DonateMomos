import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"
import SessionWrapper from "@/components/sessionWrapper"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donate Momos - Use momos as a currency",
  description: "This website is a crowdfunding website for creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>

        <Navbar />

        <div className="text-white min-h-[calc(100vh-(5rem+50px))] bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         {children}

        </div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
