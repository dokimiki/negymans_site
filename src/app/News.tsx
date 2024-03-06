import React from "react";
import "./News.scss";

export default function News() {
    const newsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const news = newsList.map((n) => <li key={n}>{n}</li>);
    return (
        <>
            <h2>News</h2>
            <h1>お知らせ</h1>
            <ul>{news}</ul>
        </>
    );
}
