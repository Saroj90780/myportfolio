import {
    Box
} from '@mui/material'
import './toppart.css'
// import App from './canvas'

import { useEffect, useState} from 'react';
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
    let timeout: ReturnType<typeof setTimeout>;

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
                    marginTop: {md:'170px',xs:"120px"},
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: {md:"51%",xs:"100%"},
                    gap: "20px",
                    height:{md:'50vh',xs:"37vh"}

                }}>
                <Box sx={
                    {
                        fontFamily: 'Poppins2',
                        letterSpacing:{md: "5px",xs:"2px"},
                        fontSize:{md: "23px",xs:"15px"},
                        color: "white"

                    }
                }>{text}
                    <span className="blinking-cursor">|</span>
                </Box>
                 <Box sx={{
                    color: "white",
                    fontSize: {md: "48px",xs:"20px"},
                    fontFamily: "Poppins1",
                    letterSpacing: {md: "9px",xs:"4px"},
                    width: {md: "100%",xs:"88%"},
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








