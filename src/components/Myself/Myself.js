import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house }) => {
    return (
        <div>
            <h4>Myself</h4>
            <p>House: {house}</p>
            <section>
                <Special house={house}></Special>
            </section>
        </div>
    );
};

export default Myself;