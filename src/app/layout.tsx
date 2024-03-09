import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "./global.scss";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: '--font-noto-sans-jp',
});

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
      <body className={notoSansJP.className}>
        <header className="glass-bg sticky inset-0 flex flex-row justify-between">
          <div><Image className="negymans-rogo" src="/img/NEGYMANS.svg" alt="NEGYMANS" width={270} height={270} /></div>
          <div className="flex flex-row">
            <nav>
              <ul className="header-right-content flex flex-row">
                <li><a className="url negymans-button" href=""><p>NEGYMANSとは</p></a></li>
                <li><a className="url contents-button" href=""><p>Contents</p></a></li>
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
