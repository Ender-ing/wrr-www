import { useEffect } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser'; // Optional but helpful


import './cover.css';
import './content.css';
import './background.css';


let timeoutId = null;
function presentationSetup() {
    // Get DOM elements
    let presentationCover = document.getElementById("presentation-cover"),
        scrollAid = document.getElementById("scroll-aid"),
        presentationBackground = document.getElementById("presentation-background"),
        coverLogoBody = document.getElementById("cover-logo-body"),
        welcomeTextWrapper = document.getElementById("welcome-text-wrapper"),
        indicatorWrapper = document.getElementById("indicator-wrapper");
    // Delay stars and cover elements
    timeoutId = setTimeout(() => {
        presentationBackground.dataset.show = true;
        coverLogoBody.dataset.show = true;
        welcomeTextWrapper.dataset.show = false; // No need for this right now!
        indicatorWrapper.dataset.show = true;
    }, 500);
    // Compensate for hidden scroll bars!
    scrollAid.onclick = () => {
        window.scrollBy({
            top: presentationCover.clientHeight,
            behavior: "smooth"
        });
    };
}

export default function PresentationMain(props) {
    const isBrowser = useIsBrowser(); // A Docusaurus hook to check the environment

    useEffect(() => {
        // This function runs after the component is first mounted to the DOM
        // in the browser.

        if (isBrowser) {
            presentationSetup();

            // If you return a function, it acts as a cleanup function 
            // (componentWillUnmount in class components).
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isBrowser]); // Including isBrowser in dependencies is generally safe and often good practice

    return <>
        <div id="presentation-background" data-show="false">
            <div className="collection small-stars-1"></div>
            <div className="collection small-stars-2"></div>
            <div className="collection stars2"></div>
            <div className="collection stars3"></div>
        </div>

        <div id="presentation-cover" className="fill-screen">
            <div id="cover-logo-wrapper">
                <svg id="cover-logo" width="250" height="250" viewBox="0 0 250 250" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="cover-logo-body" data-show="false" clipPath="url(#clip0_39_9)">
                        <g id="cover-logo-back-wrapper">
                            <path id="cover-logo-back"
                                d="M40.833 54.178C44.6691 32.4223 65.4154 17.8955 87.1712 21.7317L195.5 40.833C217.256 44.6691 231.783 65.4154 227.946 87.1712L208.845 195.5C205.009 217.256 184.263 231.783 162.507 227.946L54.1781 208.845C32.4223 205.009 17.8955 184.263 21.7317 162.507L40.833 54.178Z"
                                fill="#245AAC" />
                        </g>
                        <g id="cover-logo-front-wrapper">
                            <path id="cover-logo-front"
                                d="M22.8487 148.424C6.21689 129.993 10.3277 101.16 30.763 87.063C59.1065 67.5104 80.5592 49.9767 101.782 28.8119C120.24 10.4052 151.123 11.6874 166.136 32.9972L189.55 66.2318C190.848 68.074 192.299 69.8032 193.888 71.4009L226.665 104.358C243.652 121.44 241.798 149.552 222.713 164.253L181.5 196L145.062 229.405C127.853 245.181 100.846 242.928 86.4894 224.519L54.5 183.5L22.8487 148.424Z"
                                fill="#608CCF" />
                        </g>
                        <path id="cover-logo-outer-eye"
                            d="M175 125C175 152.614 153.614 138.5 126 138.5C98.3858 138.5 75 152.614 75 125C75 97.3858 97.3858 75 125 75C152.614 75 175 97.3858 175 125Z"
                            fill="#1C2A40" />
                        <path id="cover-logo-inner-eye"
                            d="M138 126.5C135.411 141.185 126.203 144.603 119.948 143.5C113.693 142.397 105.911 141.185 108.5 126.5C111.089 111.815 121.693 103.897 127.948 105C134.203 106.103 140.589 111.815 138 126.5Z"
                            fill="#AFBED5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_39_9">
                            <rect width="250" height="250" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div id="welcome-text-wrapper" data-show="false">
                <h1 id="welcome-text" className="game-text">Welcome to<br />ENDER.ING!</h1>
            </div>

            <div id="indicator-wrapper" data-show="false">
                <div id="scroll-aid"></div>
                <svg id="indicator" xmlns="http://www.w3.org/2000/svg"
                    fill="#FFF" height="20px" width="20px" version="1.1" viewBox="0 0 24 24">
                    <polygon
                        points="17,12 17,13 15,13 15,15 13,15 13,3 11,3 11,15 9,15 9,13 7,13 7,12 5,12 5,15 7,15 7,17 9,17 9,19 10,19 10,20   11,20 11,21 13,21 13,20 14,20 14,19 15,19 15,17 17,17 17,15 19,15 19,12 " />
                </svg>
            </div>
        </div>

        <div id="presentation-content" className="fill-screen" {...props}>

        </div>
    </>;
}