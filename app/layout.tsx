// app/layout.tsx
import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Profile from "@/components/Profile";
import SideNav from "@/components/SideNav";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "3-column portfolio layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        className={`${libreFranklin.className} min-h-screen bg-[#111111] text-zinc-100`}
      >
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-[1200px] grid grid-cols-[280px_760px_72px] gap-6 px-4 md:px-8 items-center">
            <aside className="self-center shrink-0">
              <Profile />
            </aside>

            <main className="w-[760px] self-center ">{children}</main>

            <aside className="self-center shrink-0">
              <SideNav />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
