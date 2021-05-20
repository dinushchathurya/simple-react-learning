import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    
    return (
        <React.Fragment>
            <h2>The count is: {count}</h2>
            <button onClick={() => setCount(count + 1) }>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </React.Fragment>
    );   
};

export default Counter;