import React from 'react';

import Guess from '../Guess/Guess';

function Guesses({ children }) {
    return (
        <div className={'guess-results'}>
            {children.map(({ guess, id }) => {
                return <Guess key={id}>{guess}</Guess>;
            })}
        </div>
    );
}

export default Guesses;
