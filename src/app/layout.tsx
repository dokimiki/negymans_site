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
                <footer className="footer flex">
                    <div>
                        <Image className="negymans-logo" src="/img/White_NEGYMANS.svg" alt="NEGYMANS" width={270} height={270} />
                    </div>

                    <small className="hidden">© 2023 NEGYMANS</small>

                    <div className="footer-right-content">

                        <div className="mt-6">
                            <div className="flex">
                                <p>COMPANY</p>
                                <div className="footer-sns-line"></div>
                            </div>

                            <ul className="mt-10 flex">
                                <li className="footer-content">
                                    <a className="center-under-line" href="">NEGYMANSとは</a>
                                </li>
                                <li className="footer-content">
                                    <a className="center-under-line" href="gameid">作ったゲーム</a>
                                </li>
                                <li className="footer-content">
                                    <a className="center-under-line" href="">GOT SIMULATOR</a>
                                </li>
                                <li className="footer-content">
                                    <a className="center-under-line" href="#newsid">お知らせ</a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-20 flex">
                            <p>SNS</p>
                            <div className="footer-sns-line"></div>
                        </div>

                        <ul className="mt-10 flex">
                            <li className="footer-content">
                                <a className="center-under-line" href="https://www.youtube.com/@NEGYMANS">YouTube</a>
                            </li>
                            <li className="footer-content">
                                <a className="center-under-line" href="https://twitter.com/NEGYMANS">X(旧Twitter)</a>
                            </li>
                            <li className="footer-content">
                                <a className="center-under-line" href="https://discord.gg/zjqgc8bnCM">Discord</a>
                            </li>
                            <li className="footer-content">
                                <a className="center-under-line" href="https://soundcloud.com/negimans">Soundcoud</a>
                            </li>
                            <li className="footer-content">
                                <a className="center-under-line" href="https://www.instagram.com/negymans">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </body>
        </html>
    );
}
