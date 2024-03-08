import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./global.scss";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NEGYMANS",
    description: "negymans site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="glass-bg sticky inset-0 flex flex-row justify-between">
          <div><Image className="negymans-rogo" src="/img/NEGYMANS.svg" alt="NEGYMANS" width={270} height={270} /></div>
          <div className="flex flex-row">
            <nav>
              <ul className="header-right-content flex flex-row">
                <li><a className="url" href=""><p>NEGYMANSとは</p></a></li>
                <li><a className="url" href=""><p>Contents</p></a></li>
              </ul>
            </nav>
            <div>三</div>
          </div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
