import React from 'react';

import Guess from '../Guess/Guess';
import { checkGuess } from '../../game-helpers';

function Guesses({ children, answer }) {
    return (
        <div className={'guess-results'}>
            {children.map(({ guess, id }) => {
                const guessMapping = checkGuess(guess, answer);
                return <Guess key={id}>{guessMapping}</Guess>;
            })}
        </div>
    );
}

export default Guesses;
