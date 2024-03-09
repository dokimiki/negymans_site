import "./DownloadButton.scss";
export default function DownloadButton() {
    return (
        <div className="download-button">
            <a href="https://www.negymans.com/" className="url download-url">
                <picture>
                    <img src="./img/button_download.png" alt="arrow" />
                </picture>
            </a>
        </div>
    );
}
