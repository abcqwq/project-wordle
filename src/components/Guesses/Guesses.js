import React from 'react';

function Guesses({ children }) {
    return (
        <div className={'guess-results'}>
            {children.map(({ guess, id }) => {
                return (
                    <p key={id} className={'guess'}>
                        {guess}
                    </p>
                );
            })}
        </div>
    );
}

export default Guesses;
