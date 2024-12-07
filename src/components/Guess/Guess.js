import React from 'react';

function Guess({ children }) {
    return (
        <p className={'guess'}>
            {children.map(({ letter, status }, index) => (
                <span key={index} className={`cell ${status}`}>
                    {letter}
                </span>
            ))}
        </p>
    );
}

export default Guess;
