import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState(
        range(0, NUM_OF_GUESSES_ALLOWED).map((id) => {
            return {
                id,
                guess: range(0, 5).map((_) => {
                    return { letter: '', status: '' };
                }),
            };
        })
    );
    const [tried, setTried] = React.useState(0);
    const [win, setWin] = React.useState(0);

    const addGuess = (guess) => {
        if (tried >= NUM_OF_GUESSES_ALLOWED) return;

        const guessResult = checkGuess(guess, answer);
        guesses[tried].guess = guessResult;

        setGuesses(guesses);

        const incrementedTried = tried + 1;
        setTried(incrementedTried);

        let answerIsCorrect = true;
        guessResult.forEach(({ status }) => {
            answerIsCorrect = answerIsCorrect && status === 'correct';
        });

        if (answerIsCorrect) {
            setWin(1);
        } else if (incrementedTried === NUM_OF_GUESSES_ALLOWED) {
            setWin(-1);
        }
    };

    return (
        <>
            <Guesses>{guesses}</Guesses>
            <GuessInput gameOver={win !== 0} addGuess={addGuess} />

            {win === 1 && (
                <div className={'happy banner'}>
                    <p>
                        <strong>Congratulations!</strong> Got it in{' '}
                        <strong>{tried} guesses</strong>
                    </p>
                </div>
            )}

            {win === -1 && (
                <div className={'sad banner'}>
                    <p>
                        Sorry, the correct answer is{' '}
                        <strong>{answer}</strong>.
                    </p>
                </div>
            )}
        </>
    );
}

export default Game;
