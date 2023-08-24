import { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
    }
    if (counter == 3) {
        throw new Error("Counter exceeded error");
    }
    return (
        <div>
            <h1 onClick={incrementCounter}>Counter value is {counter}</h1>
        </div>
    )
}
export default Counter;