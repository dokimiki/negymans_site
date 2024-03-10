import React from "react";
import "./News.scss";
import "./global.scss";

type newsObject = {
    newsTitle: string;
    newsExplanation: string;
    newsDate: string;
    newsUrl: string;
};
// お知らせのコンテンツ表示
export default function News() {
    return (
        <div className="news">
            <div className="heading">
                <h3 className="text-facing sub-heading">NEWS</h3>
                <h2 className="text-blue-bg main-heading">お知らせ</h2>
            </div>
            {NewsList()}
        </div>
    );
}

function NewsList() {
    // 本来はAPIからデータを取得する(ダミーデータ)
    //お知らせのデータ
    const newsList: newsObject[] = [
        {
            newsTitle: "NEGYMANS結成",
            newsExplanation: "学校の課題研究でゲーム制作をするためにNEGYMANSが結成されました。",
            newsDate: "2023.04.01",
            newsUrl: "",
        },
        {
            newsTitle: "GOT SIMULATOR 発表",
            newsExplanation: "ゲーム「GOTSIMULATOR」を課題研究発表会で発表しました。",
            newsDate: "2024.01.15",
            newsUrl: "",
        },
        {
            newsTitle: "GOT SIMULATOR Steam公開決定",
            newsExplanation: "ゲーム「GOTSIMULATOR」がSteamで公開されることが決定しました。",
            newsDate: "2024.03.09",
            newsUrl: "",
        },
        {
            newsTitle: "GOT SIMULATOR アリーナ発表",
            newsExplanation: "課題研究で制作したゲーム「GOTSIMULATOR」を学校のアリーナで全校生徒の前で発表しました。",
            newsDate: "2024.03.11",
            newsUrl: "",
        },
    ];
    return (
        <>
            <ul className="news-list">
                {newsList.map((_, i, n) => (
                    <li key={1} className="news-container">
                        <h3 className="news-title">{n[n.length - 1 - i].newsTitle}</h3>
                        <div className="news-right-content">
                            <p className="news-explanation">{n[n.length - 1 - i].newsExplanation}</p>
                            <div className="news-under-content">
                                <p className="news-date">{n[n.length - 1 - i].newsDate}</p>
                                {urlIndicate(n, i)}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

// URLがある場合はリンクボタンを表示
function urlIndicate(n: newsObject[], i: number) {
    if (n[n.length - 1 - i].newsUrl != "") {
        return (
            <a href={n[n.length - 1 - i].newsUrl} className="link-button transparent-button">
                <picture>
                    <img src="./img/button_arrow.png" alt="arrow" className="link-button-icon" />
                </picture>
            </a>
        );
    } else {
        return;
    }
}
