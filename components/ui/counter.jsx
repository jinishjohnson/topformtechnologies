"use client";

import CountUp from 'react-countup';

const AnimatedCounter = ({ endValue, suffix = "", prefix = "", className = "text-4xl font-bold" }) => {
    return (
        <div className={className}>
            <CountUp
                start={0}
                end={endValue}
                duration={2.5}
                separator=","
                suffix={suffix}
                prefix={prefix}
                useEasing={true}
                scrollSpy={true}
            />
        </div>
    );
};

export default AnimatedCounter;
