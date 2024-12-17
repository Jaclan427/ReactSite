import React, { useState, useEffect } from 'react';

function TypingEffect({ words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 1000 }) {
    const [displayText, setDisplayText] = useState("I'm a ");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout;

        const currentWord = words[wordIndex];

        if (isDeleting) {
            // Deleting characters
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        } else {
            // Typing characters
            if (charIndex < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + currentWord[charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return <h1>{displayText}</h1>;
}

export default TypingEffect;
