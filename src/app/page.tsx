"use client"
import React from "react";

import About from "./About";
import FirstView from "./FirstView";
import News from "./News";
import Games from "./Games";
import DownloadButton from "./DownloadButton";

import { isMobile } from "react-device-detect";
import { BrowserView, MobileView } from "react-device-detect";


import { Gradient } from '@/components/Gradient'

// Create your instance
const gradient: any = new Gradient()

export default function Home() {
    React.useEffect(() => {
        // Call `initGradient` with the selector to your canvas
        gradient.initGradient('#gradient-canvas')
    }, [])

    return (
        <main>
            <canvas id="gradient-canvas" data-transition-in />
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
