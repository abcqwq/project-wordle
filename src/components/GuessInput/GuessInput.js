import React from 'react';

function GuessInput({ gameOver, addGuess }) {
    const [guess, setGuess] = React.useState('');

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                addGuess(guess);

                setGuess('');
            }}
            className={'guess-input-wrapper'}>
            <label htmlFor={'guess-input'}>Enter guess:</label>
            <input
                pattern={'[A-Za-z]{5,5}'}
                maxLength={5}
                value={guess}
                disabled={gameOver}
                title={
                    'Your guess must consists of 5 characters and alphabets only.'
                }
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase());
                }}
                id={'guess-input'}
            />
        </form>
    );
}

export default GuessInput;
