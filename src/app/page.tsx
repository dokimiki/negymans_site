import About from "./About";
import FirstView from "./FirstView";
import News from "./News";
import Games from "./Games";
import DownloadButton from "./DownloadButton";

import { isMobile } from "react-device-detect";
import { BrowserView, MobileView } from "react-device-detect";

export default function Home() {
    return (
        <main>
            <FirstView />
            {MobileBoolean()}
            <News />
            <About />
            <Games />
        </main>
    );
}

function MobileBoolean() {
    if (!isMobile) {
        return <DownloadButton />;
    }
    return <></>;
}
