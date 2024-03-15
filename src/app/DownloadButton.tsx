import "./DownloadButton.scss";
export default function DownloadButton() {
    return (
        <>
            <div className="download-button">
                <h2>GOT SIMULATOR(Windows.ver)のダウンロード</h2>
                <a
                    href="https://github.com/dokimiki/negymans_site/releases/download/v0.1.0/GOT_SIMULATOR.zip"
                    className="link-button black-button"
                >
                    <p>ゲームを遊ぶ</p>
                    <picture>
                        <img src="./img/button_download.png" alt="arrow" className="link-button-icon" />
                    </picture>
                </a>
            </div>
        </>
    );
}
