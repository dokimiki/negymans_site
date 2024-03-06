import React from "react";
import "./News.scss";

type NewsObject = {
    title: string;
    explanation: string;
    date: string;
    url: string;
};

export default function News() {
    return (
        <div className="News">
            <h2>News</h2>
            <h1>お知らせ</h1>
            {newsList()}
        </div>
    );
}

function newsList() {
    const newsList: NewsObject[] = [
        {
            title: "NEGYMANSのWebサイトを公開",
            explanation:
                "Stet amet ipsum amet diam lorem nulla sit tempor. Molestie suscipit takimata duis sed est elitr duis nulla sit diam stet ipsum et justo suscipit. Lorem vel takimata aliquyam justo et kasd dolor nonummy. Stet invidunt elitr ut dolores exerci ipsum nibh elitr dolor dolor praesent. Magna dignissim rebum voluptua ipsum sit dolor nulla at lorem doming vero tempor no et clita. Amet tempor diam sit aliquyam stet sanctus et gubergren iusto sed sed at amet nibh consequat. Sanctus sadipscing nostrud at feugiat imperdiet illum dolore tempor enim. Kasd feugiat erat wisi erat. Sit lorem vero no velit et facilisis kasd eirmod dolor dolor ",
            date: "2023.3.1",
            url: "https://www.negymans.com/",
        },
        {
            title: "アリーナ発表",
            explanation: "先日アリーナで発表会",
            date: "2023.3.11",
            url: "https://www.negymans.com/",
        },
        { title: "GOTSIMULATOR", explanation: "ゲームを作ったよ", date: "2023.3.44", url: "https://www.negymans.com/" },
    ];
    return (
        <>
            <ul className="list">
                {newsList.map((n) => (
                    <li key={1} className="container">
                        <h2 className="title">{n.title}</h2>
                        <div className="rightContent">
                            <p className="explanation">{n.explanation}</p>
                            <div className="unContent">
                                <p className="date">{n.date}</p>
                                <a href={n.url} className="url">
                                    詳細
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
