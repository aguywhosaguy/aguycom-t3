import "@/styles/globals.css";

import { Source_Code_Pro } from "next/font/google";
import { type Metadata } from "next";
import TopBar from "@/lib/components/TopBar";
import TopBarProto from "@/lib/components/TopBarProto";

const sourceCodePro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "aguywhosaguy",
  description: "the website for aguywhosaguy",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceCodePro.className}`}>
      <body>
        <TopBarProto links={[{name: "Home", path: ""}, {name: "Projects", path: "projects"}]} />
        {children}
      </body>
    </html>
  );
}
