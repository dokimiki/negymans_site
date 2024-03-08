import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
type gameObject = {
    gameTitle: string;
    explanation: string;
    gameUrl: string;
    gameImage: string;
};

// お知らせのコンテンツ表示
export default function Games() {
    return (
        <div className="news">
            <div className="heading">
                <h3 className="text-facing">Games</h3>
                <h2 className="text-blue-bg">作ったゲーム</h2>
            </div>
            {GamesList()}
            <div className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide">1</li>
                        <li className="splide__slide">2</li>
                        <li className="splide__slide">3</li>
                    </ul>
                </div>
            </div>
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
            gameImage: "画像はイメージです",
        },
        {
            gameTitle: "Apex Legends",
            explanation: "すばらしいゲーム",
            gameUrl: "https://www.negymans.com/",
            gameImage: "画像はイメージです",
        },
        {
            gameTitle: "松下の分岐型ゲーム",
            explanation: "ゲームを作ったよ",
            gameUrl: "https://www.negymans.com/",
            gameImage: "画像はイメージです",
        },
    ];
    return (
        <>
            <ul>
                <h1>{gameList[0].gameTitle}</h1>
                {gameList.map((n) => (
                    <li key={1}>
                        <p>{n.gameImage}</p>
                        <h3>{n.gameTitle}</h3>

                        <p>{n.explanation}</p>

                        <a href={n.gameUrl}></a>
                    </li>
                ))}
            </ul>
        </>
    );
}

const options = {
    perMove: 1,
    gap: 16,
    cover: true,
    heightRatio: 0.5,
    updateOnMove: true,
    padding: "5rem",
    type: "loop",
    focus: "center",
};

const splide = new Splide(".splide", options);
splide.mount();
