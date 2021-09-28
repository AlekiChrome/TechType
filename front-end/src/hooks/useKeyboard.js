import { useState, useEffect } from 'react';

function useKeyboard() {
    const [ input, setInput ] = useState('');
    
    useEffect(() => {
        const handleKeyPress = (e) => {
            // console.log(e.key)
            // console.log('event listener', input)
            if (e.key.length === 1) {
                setInput(input => input + e.key)
            };
            // if (e.keyCode === 8) {

            //     setInput()
            // }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return input;
};

export default useKeyboard;