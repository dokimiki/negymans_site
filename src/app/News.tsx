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
            newsTitle: "NEGYMANSのWebサイトを公開",
            newsExplanation:
                "Stet amet ipsum amet diam lorem nulla sit tempor. Molestie suscipit takimata duis sed est elitr duis nulla sit diam stet ipsum et justo suscipit. Lorem vel takimata aliquyam justo et kasd dolor nonummy. Stet invidunt elitr ut dolores exerci ipsum nibh elitr dolor dolor praesent. Magna dignissim rebum voluptua ipsum sit dolor nulla at lorem doming vero tempor no et clita. Amet tempor diam sit aliquyam stet sanctus et gubergren iusto sed sed at amet nibh consequat. Sanctus sadipscing nostrud at feugiat imperdiet illum dolore tempor enim. Kasd feugiat erat wisi erat. Sit lorem vero no velit et facilisis kasd eirmod dolor dolor ",
            newsDate: "2023.3.1",
            newsUrl: "https://www.negymans.com/",
        },
        {
            newsTitle: "アリーナ発表",
            newsExplanation: "先日アリーナで発表会",
            newsDate: "2023.3.11",
            newsUrl: "https://www.negymans.com/",
        },
        { newsTitle: "GOTSIMULATOR", newsExplanation: "ゲームを作ったよ", newsDate: "2023.3.44", newsUrl: "https://www.negymans.com/" },
    ];
    return (
        <>
            <ul className="news-list">
                {newsList.map((n) => (
                    <li key={1} className="news-container">
                        <h3 className="news-title">{n.newsTitle}</h3>
                        <div className="news-right-content">
                            <p className="news-explanation">{n.newsExplanation}</p>
                            <div className="news-under-content">
                                <p className="news-date">{n.newsDate}</p>
                                <a href={n.newsUrl} className="url news-url">
                                    <p>→</p>
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
