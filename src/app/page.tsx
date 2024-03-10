import About from "./About";
import FirstView from "./FirstView";
import News from "./News";
import Games from "./Games";
import DownloadButton from "./DownloadButton";

export default function Home() {
    return (
        <main>
            <FirstView />
            <DownloadButton />
            <News />
            <About />
            <Games />
        </main>
    );
}
