import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState(
        range(0, NUM_OF_GUESSES_ALLOWED).map((id) => {
            return { id, guess: '' };
        })
    );
    const [tried, setTried] = React.useState(0);

    const addGuess = (guess) => {
        if (tried >= NUM_OF_GUESSES_ALLOWED) return;

        guesses[tried].guess = guess;

        setTried(tried + 1);
        setGuesses(guesses);
    };

    return (
        <>
            <Guesses answer={answer}>{guesses}</Guesses>
            <GuessInput tried={tried} addGuess={addGuess} />
        </>
    );
}

export default Game;
