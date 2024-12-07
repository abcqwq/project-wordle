import React from 'react';

import { range } from '../../utils';

function Guess({ children }) {
    return (
        <p className={'guess'}>
            {range(0, 5).map((id) => (
                <span key={id} className={'cell'}>
                    {children?.charAt(id)}
                </span>
            ))}
        </p>
    );
}

export default Guess;
