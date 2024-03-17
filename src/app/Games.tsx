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
        <div id="gameid" className="games">
            <div className="games-heading">
                <h3 className="text-facing game-sub-title">GAMES</h3>
                <h2 className="game-title text-blue-bg">作ったゲーム</h2>
            </div>
            {GameList()}
        </div>
    );
}

function GameList() {
    const gameList: gameObject[] = [
        {
            gameTitle: "GOT SIMULATOR",
            explanation:
                "初音ミクが地球を侵略するアクションゲームです。 髪を伸ばしたり、建物を破壊したり。 あなたの思い通りにこの世界を支配しましょう！",
            gameUrl: "https://store.steampowered.com/app/2856870/GOT_Simulator/",
            gameImage: "./img/game1.png",
        },
        {
            gameTitle: "GOT SIMULATOR",
            explanation:
                "初音ミクが地球を侵略するアクションゲームです。 髪を伸ばしたり、建物を破壊したり。 あなたの思い通りにこの世界を支配しましょう！",
            gameUrl: "https://store.steampowered.com/app/2856870/GOT_Simulator/",
            gameImage: "./img/game2.png",
        },
        {
            gameTitle: "GOT SIMULATOR",
            explanation:
                "初音ミクが地球を侵略するアクションゲームです。 髪を伸ばしたり、建物を破壊したり。 あなたの思い通りにこの世界を支配しましょう！",
            gameUrl: "https://store.steampowered.com/app/2856870/GOT_Simulator/",
            gameImage: "./img/game3.png",
        },
    ];
    return (
        <>
            <Splide
                options={{
                    classes: {
                        arrow: "splide__arrow custom-arrow",
                        track: "splide__track custom-track",
                        prev: "splide__arrow--prev custom-prev",
                        next: "splide__arrow--next custom-next",
                    },
                    perMove: 1,
                    gap: "7em",
                    cover: true,
                    heightRatio: 1,
                    updateOnMove: true,
                    padding: "22vw",
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
                                <a href={n.gameUrl} className="link-button transparent-button games-url">
                                    <p>Steamへ</p>
                                    <picture>
                                        <img src="./img/button_arrow.png" alt="arrow" className="link-button-icon" />
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
