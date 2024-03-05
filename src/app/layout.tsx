import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./global.scss";

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
          <div>NEGYMANS</div>
          <div className="flex flex-row">
            <nav>
              <ul className="flex flex-row">
                <li>NEGYMANSとは</li>
                <li>Contents</li>
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
