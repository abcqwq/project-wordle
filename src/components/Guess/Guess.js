import React from 'react';

import { range } from '../../utils';

function Guess({ children }) {
    const word =
        children ??
        range(0, 5).map((_) => {
            return { letter: '', status: '' };
        });

    return (
        <p className={'guess'}>
            {word.map(({ letter, status }, index) => (
                <span key={index} className={`cell ${status}`}>
                    {letter}
                </span>
            ))}
        </p>
    );
}

export default Guess;
