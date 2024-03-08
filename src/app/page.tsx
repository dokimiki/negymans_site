import About from "./About";
import FirstView from "./FirstView";
import News from "./News";
import Games from "./Games";

export default function Home() {
    return (
        <main>
            <FirstView />
            <News />
            <About />
            <Games />
        </main>
    );
}
