"use client";

import Lottie from "lottie-react";
import animationData from "../animation/Mobile Dev.json";

export default function LottieAnimationMbl() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}