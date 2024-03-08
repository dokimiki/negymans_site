"use client";
import React from "react";
import "./Games.scss";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

type gameObject = {
    gameTitle: string;
    explanation: string;
    gameUrl: string;
    gameImage: string;
};

// ゲーム表示
export default function Games() {
    return (
        <div className="news">
            <div className="heading">
                <h3 className="text-facing">Games</h3>
                <h2 className="text-blue-bg">作ったゲーム</h2>
            </div>
            {GamesList()}
        </div>
    );
}

function GamesList() {
    const gameList: gameObject[] = [
        {
            gameTitle: "GOTSIMULATOR",
            explanation:
                "Stet amet ipsum amet diam lorem nulla sit tempor. Molestie suscipit takimata duis sed est elitr duis nulla sit diam stet ipsum et justo suscipit. Lorem vel takimata aliquyam justo et kasd dolor nonummy. Stet invidunt elitr ut dolores exerci ipsum nibh elitr dolor dolor praesent. Magna dignissim rebum voluptua ipsum sit dolor nulla at lorem doming vero tempor no et clita. Amet tempor diam sit aliquyam stet sanctus et gubergren iusto sed sed at amet nibh consequat. Sanctus sadipscing nostrud at feugiat imperdiet illum dolore tempor enim. Kasd feugiat erat wisi erat. Sit lorem vero no velit et facilisis kasd eirmod dolor dolor ",
            gameUrl: "https://www.negymans.com/",
            gameImage: "https://placehold.jp/1920x1080.png",
        },
        {
            gameTitle: "Apex Legends",
            explanation: "すばらしいゲーム",
            gameUrl: "https://www.negymans.com/",
            gameImage: "https://placehold.jp/1920x1080.png",
        },
        {
            gameTitle: "松下の分岐型ゲーム",
            explanation: "ゲームを作ったよ",
            gameUrl: "https://www.negymans.com/",
            gameImage: "https://placehold.jp/1920x1080.png",
        },
    ];
    return (
        <>
            <ul>
                <Splide
                    options={{
                        perMove: 1,
                        gap: 1,
                        cover: true,
                        heightRatio: 0.5,
                        updateOnMove: true,
                        padding: "15rem",
                        type: "loop",
                        focus: "center",
                        width: "100%",
                    }}
                    aria-label="React Splide Example"
                >
                    {gameList.map((n) => (
                        <SplideSlide key={1}>
                            <picture>
                                <img className="game-img" src={n.gameImage} alt="placeholder" />
                            </picture>
                        </SplideSlide>
                    ))}
                </Splide>
            </ul>
        </>
    );
}
