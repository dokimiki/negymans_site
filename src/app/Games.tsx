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
        <div className="games">
            <div className="games-heading">
                <h3 className="text-facing game-sub-title">GAMES</h3>
                <h2 className="text-blue-bg game-title">作ったゲーム</h2>
            </div>
            {GameList()}
        </div>
    );
}

function GameList() {
    const gameList: gameObject[] = [
        {
            gameTitle: "GOTSIMULATOR",
            explanation:
                "Stet amet ipsum amet diam lorem nulla sit tempor. Molestie suscipit takimata duis sed est elitr duis nulla sit diam stet ipsum et justo suscipit. Lorem vel takimata aliquyam justo et kasd dolor nonummy. Stet invidunt elitr ut dolores exerci ipsum nibh elitr dolor dolor praesent. Magna dign",
            gameUrl: "https://www.negymans.com/",
            gameImage: "./img/game1.png",
        },
        {
            gameTitle: "Apex Legends",
            explanation:
                "Stet amet ipsum amet diam lorem nulla sit tempor. Molestie suscipit takimata duis sed est elitr duis nulla sit diam stet ipsum et justo suscipit. Lorem vel takimata aliquyam justo et kasd dolor nonummy. Stet invidunt elitr ut dolores exerci ipsum nibh elitr dolor dolor praesent. Magna dign",

            gameUrl: "https://www.negymans.com/",
            gameImage: "./img/game2.png",
        },
        {
            gameTitle: "松下の分岐型ゲーム",
            explanation:
                "Stet amet ipsum amet diam lorem nulla sit tempor. Molestie suscipit takimata duis sed est elitr duis nulla sit diam stet ipsum et justo suscipit. Lorem vel takimata aliquyam justo et kasd dolor nonummy. Stet invidunt elitr ut dolores exerci ipsum nibh elitr dolor dolor praesent. Magna dign",
            gameUrl: "https://www.negymans.com/",
            gameImage: "./img/game3.png",
        },
    ];
    return (
        <>
            <Splide
                options={{
                    classes: {
                        arrow: "splide__arrow custom-arrow",
                        prev: "splide__arrow--prev custom-prev",
                        next: "splide__arrow--next custom-next",
                    },
                    perMove: 1,
                    gap: 5,
                    cover: true,
                    heightRatio: 1,
                    height: "90vh",
                    updateOnMove: true,
                    padding: "20rem",
                    type: "loop",
                    focus: "center",
                }}
                aria-label="React Splide Example"
                className="root-splide"
            >
                {gameList.map((n) => (
                    <SplideSlide key={1} className="game-list">
                        <picture>
                            <img className="game-img" src={n.gameImage} alt="placeholder" />
                        </picture>
                        <div className="games-container">
                            <h3>{n.gameTitle}</h3>
                            <div className="games-text">
                                <p>{n.explanation}</p>
                                <a href={n.gameUrl} className="url games-url">
                                    <p>公式サイトへ</p>
                                    <picture>
                                        <img src="./img/button_arrow.png" alt="arrow" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </>
    );
}
