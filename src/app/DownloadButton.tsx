import "./DownloadButton.scss";
export default function DownloadButton() {
    return (
        <>
            <div className="download-button">
                <h2>GOT SIMULATOR(Windows.ver)のダウンロード</h2>
                <a href="https://store.steampowered.com/app/2856870/GOT_Simulator/" className="link-button black-button">
                    <p>ダウンロード</p>
                    <picture>
                        <img src="./img/button_download.png" alt="arrow" className="link-button-icon" />
                    </picture>
                </a>
            </div>
        </>
    );
}
