import { Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function DisplaySnippets({snippet}) {
    const [input, setInput] = useState('');
    const [workingSnippet, setWorkingSnippet] = useState([]);

    const Correct = styled.div`
        color: (--neongreen)
    `
    const Incorrect = styled.div`
        color: (--crimson)
    `
    console.log(snippet)
    const allSnippets = snippet.map((oneSnippet) => oneSnippet.snippet);
    const superString = allSnippets.join('').split('');
    
    useEffect(() => {
        console.log(superString, 'superString here!')
        setWorkingSnippet(superString)
        for (
            let i = 0, len = input.length;
            i < len;
            i++) {
            input[i] === superString[i]
                ? <Correct>{input}</Correct>
                : <Incorrect>{input}</Incorrect>
        }
    });

    const handle_userInput = (e) => {
        setInput(e.target.value)
    };

    return (
        <div>
            <br/>
            <br/>
            <br />
            
            <h3 style={{ whiteSpace: 'pre-wrap' }}>{allSnippets}</h3>

            <textarea
                style={{ background: 'none', borderColor: 'red', width: '45rem', height: '6rem'}}
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={handle_userInput} />
        </div>
    );
};

export default DisplaySnippets;
