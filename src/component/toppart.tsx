import {
    Box
} from '@mui/material'
import './toppart.css'
// import App from './canvas'

import { useEffect, useState, useRef } from 'react';
const Toppart = () => {
    const sentences = [
        "WELCOME TO MY PORTFOLIO",
        "I'M A FULL-STACK MERN DEVELOPER",
        "I BUILD MODERN WEB APP"
    ];
    const [text, setText] = useState('')
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


const sentence = "LET'S BUILD SOMETHING TOGETHER";
  const words = sentence.split(' ');
  const lastWord = words.pop(); // Remove and store last word
  const firstPart = words.join(' ');

  // Combine all letters including space between firstPart and lastWord
  const fullText = `${firstPart} ${lastWord}`;


    useEffect(() => {
        const currentSentence = sentences[sentenceIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = 1100;
        let timeout;

        if (!isDeleting && charIndex < currentSentence.length) {
            timeout = setTimeout(() => {
                setText(currentSentence.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(currentSentence.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, typingSpeed);
        } else if (!isDeleting && charIndex === currentSentence.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, sentenceIndex]);


    return (
        <>
            <Box
                sx={{
                    marginTop: '170px',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    gap: "20px",
                    height:'50vh'

                }}>
                <Box sx={
                    {
                        fontFamily: 'Poppins2',
                        letterSpacing: "5px",
                        fontSize: "23px",
                        color: "white"

                    }
                }>{text}
                    <span className="blinking-cursor">|</span>
                </Box>
                 <Box sx={{
                    color: "white",
                    fontSize: "48px",
                    fontFamily: "Poppins1",
                    letterSpacing: "9px",
                    width: "50%",
                }}>
                    {fullText.split('').map((char, index) => {
                        // Find index where last word starts
                        const lastWordStartIndex = firstPart.length + 1;

                        const isLastWord = index >= lastWordStartIndex;

                        return (
                            <span
                                key={index}
                                className={`fade-letter ${isLastWord ? 'highlight-letter' : ''}`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        );
                    })}
                </Box>



                <Box sx={{
                    color: "white"
                }}>
                    Hi, I'm Saroj Kumar Padhi <span role="img" aria-label="waving hand">👋</span>
                </Box>
            
            </Box>
        </>
    )
}
export default Toppart








