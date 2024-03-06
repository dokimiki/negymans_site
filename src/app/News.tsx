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
            title: "アリーナ発表",
            explanation: "先日アリーナで発表会",
            date: "2023/3/11",
            url: "https://www.negymans.com/",
        },
        { title: "GOTSIMULATOR", explanation: "ゲームを作ったよ", date: "2023/3/44", url: "https://www.negymans.com/" },
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
