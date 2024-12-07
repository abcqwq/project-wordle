import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    const addGuess = (guess) => {
        const nextGuesses = [...guesses];
        nextGuesses.push({
            id: Math.random(),
            guess,
        });

        setGuesses(nextGuesses);
    };

    return (
        <>
            Put a game here!
            <Guesses>{guesses}</Guesses>
            <GuessInput addGuess={addGuess} />
        </>
    );
}

export default Game;
