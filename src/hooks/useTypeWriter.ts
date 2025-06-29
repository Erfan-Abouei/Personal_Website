import type { UseTypewriterOptions } from '@/types/global.types';
import { useState, useEffect } from 'react';

const useTypewriter = (
    text: string,
    { speed = 50, loop = false, delay = 1000 }: UseTypewriterOptions
): string => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;


        if (!isDeleting && index < text.length) {
            timeout = setTimeout(() => {
                setDisplayText(prev => prev + text.charAt(index));
                setIndex(prev => prev + 1);
            }, speed);

        } else if (loop && !isDeleting && index === text.length) {

            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, delay);

        } else if (loop && isDeleting && index > 0) {

            timeout = setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
                setIndex(prev => prev - 1);
            }, speed);

        } else if (loop && isDeleting && index === 0) {

            setIsDeleting(false);

        }

        return () => clearTimeout(timeout);
    }, [index, speed, loop, delay, isDeleting]);

    return displayText;
};

export default useTypewriter;
