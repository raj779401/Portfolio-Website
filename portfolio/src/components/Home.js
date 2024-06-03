import { MdKeyboardArrowRight } from "react-icons/md";
import heroImage from '../assets/heroImage.jpg';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';

export default function Home() {
    const words = ["Full Stack Developer", "Android Developer", "Web Designer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedLetters, setDisplayedLetters] = useState("");
    const [isAppearing, setIsAppearing] = useState(true);

    // Calculate the maximum width based on the longest word
    const maxWidth = Math.max(...words.map(word => word.length)) * 20; // Assuming an average character width of 20px

    useEffect(() => {
        let letterInterval;
        let wordTimeout;

        if (isAppearing) {
            letterInterval = setInterval(() => {
                setDisplayedLetters((prev) => {
                    const nextLetters = words[currentWordIndex].slice(0, prev.length + 1);
                    if (nextLetters === words[currentWordIndex]) {
                        clearInterval(letterInterval);
                        wordTimeout = setTimeout(() => setIsAppearing(false), 2000); // Stay for 2 seconds
                    }
                    return nextLetters;
                });
            }, 100);
        } else {
            letterInterval = setInterval(() => {
                setDisplayedLetters((prev) => {
                    const nextLetters = prev.slice(0, prev.length - 1);
                    if (nextLetters === "") {
                        clearInterval(letterInterval);
                        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                        setIsAppearing(true);
                    }
                    return nextLetters;
                });
            }, 100);
        }

        return () => {
            clearInterval(letterInterval);
            clearTimeout(wordTimeout);
        };
    }, [isAppearing, currentWordIndex, words]);

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-900 flex justify-center items-center">
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
                <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 h-full md:pr-4">
                    <h1 className="text-4xl sm:text-7xl font-bold text-white px-2 md:pt-16" style={{ width: `${maxWidth}px` }}>
                        I'm a <span>{displayedLetters}</span>
                    </h1>
                    <p className="text-gray-500 px-auto py-4 max-w-md ">
                        Many desktop publishing packages 
                        and web page editors now use Lorem
                        Ipsum as their default model text,
                        and a search for 'lorem ipsum' will 
                        uncover many web sites still in their 
                        infancy. Various versions have evolved 
                        over the years, sometimes by accident,
                        sometimes on purpose (injected humour 
                        and the like).
                    </p>
                    <div name="button div" className="flex justify-center">
                        <Link to="portfolio" smooth={true} duration={500} className="group w-fit text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                            Portfolio <span className="group-hover:rotate-90"><MdKeyboardArrowRight size={25} /></span>
                        </Link>  
                    </div>
                </div>
                <div className="max-w-md md:w-1/2">
                <img className="p-10 rounded-full mx-auto md:mx-0 md:w-full" src={heroImage} alt="Raj Singh"/>

                </div>
            </div>
        </div>
    );
}
