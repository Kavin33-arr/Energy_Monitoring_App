import './DeviceStats.css'
import React from 'react'
import { useState, useEffect, useRef } from 'react';

const DeviceStats = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 6
    const intervalRef = useRef(null);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    useEffect(() => {
        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
            }, 2000);
        };

        startInterval();

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [currentSlide]);
    return (
        <div className='DeviceStats'>
            <div className="leftCarouselNavigation" onClick={handlePrevSlide}>
                <div className="leftCarouselNavigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
                    </svg>
                </div>
            </div>
            <div className='carousel'>
                <div className={`carouselSlide1 ${currentSlide === 0 ? 'active' : ''}`}>
                    <div className="slide1Head">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                        </svg>
                    </div>
                    <div className='slide1Main'>
                        123
                    </div>
                    <div className="slide1Sub">
                        Average Units Consumed <div className="smallSub">per day</div>
                    </div>
                </div>


                <div className={`carouselSlide2 ${currentSlide === 1 ? 'active' : ''}`}>
                    <div className="slide1Head">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                        </svg>
                    </div>
                    <div className='slide1Main'>
                        123
                    </div>
                    <div className="slide1Sub">
                        kilogram Equivalent Carbondioxide
                        <div className="smallSub">Generated</div>
                    </div>
                </div>


                <div className={`carouselSlide3 ${currentSlide === 2 ? 'active' : ''}`}>
                    <div className="slide1Head">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plug" viewBox="0 0 16 16">
                            <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.08 2.08 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.92 1.92 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0M5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4z" />
                        </svg>
                    </div>
                    <div className='slide1MainWord'>
                        Charger
                    </div>
                    <div className="slide1Sub">
                        Most Active Device
                        <div className="smallSub">this period</div>
                    </div>
                </div>

                <div className={`carouselSlide4 ${currentSlide === 3 ? 'active' : ''}`}>
                    <div className="slide1Head">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plugin" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0" />
                        </svg>
                    </div>
                    <div className='slide1MainWord'>
                        Charger
                    </div>
                    <div className="slide1Sub">
                        Most Power Consumed Device
                        <div className="smallSub">this period</div>
                    </div>
                </div>

                <div className={`carouselSlide5 ${currentSlide === 4 ? 'active' : ''}`}>
                    <div className="slide1Head">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
                            <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z" />
                        </svg>
                    </div>
                    <div className='slide1Main'>
                        123
                    </div>
                    <div className="slide1Sub">
                        Most Units Consumed
                        <div className="smallSub">in a day</div>
                    </div>
                </div>

                <div className={`carouselSlide6 ${currentSlide === 5 ? 'active' : ''}`}>
                    <div className="slide1Head">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-hourglass" viewBox="0 0 16 16">
                            <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z" />
                        </svg>
                    </div>
                    <div className='slide1Main'>
                        123
                    </div>
                    <div className="slide1Sub">
                        Most Active Hours
                        <div className="smallSub">in a day</div>
                    </div>
                </div>
            </div>
            <div className="rightCarouselNavigation" onClick={handleNextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16   " fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
                </svg>
            </div>
        </div>


    )
}

export default DeviceStats
