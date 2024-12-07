import React from 'react';

function GuessInput() {
    const [guess, setGuess] = React.useState('');

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log({ guess });
            }}
            className={'guess-input-wrapper'}>
            <label htmlFor={'guess-input'}>Enter guess:</label>
            <input
                pattern={'[A-Za-z]{5,5}'}
                maxLength={5}
                value={guess}
                title={'Your guess must consists of 5 characters.'}
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase());
                }}
                id={'guess-input'}
            />
        </form>
    );
}

export default GuessInput;
