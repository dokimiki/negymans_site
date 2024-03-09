import "./DownloadButton.scss";
export default function DownloadButton() {
    return (
        <div className="download-button">
            <a href="https://www.negymans.com/" className="link-button black-button">
                <p>ダウンロード</p>
                <img src="./img/button_download.png" alt="arrow" className="link-button-icon" />
            </a>
        </div>
    );
}
