import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "./global.scss";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
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
                    <div>
                        <Image className="negymans-logo" src="/img/NEGYMANS.svg" alt="NEGYMANS" width={270} height={270} />
                    </div>
                    { <div className="flex flex-row">
                        <nav>
                            <ul className="header-right-content flex flex-row">
                                <li>
                                    <a className="link-button transparent-button negymans-button" href="">
                                        <p>NEGYMANSとは</p>
                                    </a>
                                </li>
                                <li>
                                    <a className="link-button transparent-button contents-button" href="#gameid">
                                        <p>Games</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/*<div>三</div>*/}
    </div>}
                </header>
                {children}
                <footer className="footer">
                    <ul>
                        <li className="footer-content">
                            <p>YouTube </p>
                            <a href="https://www.youtube.com/@NEGYMANS">https://www.youtube.com/@NEGYMANS</a>
                        </li>
                        <li className="footer-content">
                            <p>X(旧Twitter) </p>
                            <a href="https://twitter.com/NEGYMANS">https://twitter.com/NEGYMANS</a>
                        </li>
                        <li className="footer-content">
                            <p>Discord </p>
                            <a href="https://discord.gg/zjqgc8bnCM">https://discord.gg/zjqgc8bnCM</a>
                        </li>
                        <li className="footer-content">
                            <p>Soundcoud </p>
                            <a href="https://soundcloud.com/negimans">https://soundcloud.com/negimans</a>
                        </li>
                        <li className="footer-content">
                            <p>Instagram </p>
                            <a href="https://www.instagram.com/negymans">https://www.instagram.com/negymans</a>
                        </li>
                    </ul>
                    <small className="copy-right">© 2023 NEGYMANS</small>
                </footer>
            </body>
        </html>
    );
}
