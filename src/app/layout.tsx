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
        <header>
          this is header
        </header>
        {children}
        <div className="h-screen">this is footer</div>
        <footer></footer>
      </body>
    </html>
  );
}
