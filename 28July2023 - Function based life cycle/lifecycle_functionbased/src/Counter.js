import { useState, useEffect } from 'react';

function Counter() {
    console.log("Counter component loaded");
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (counter == 0) {
            console.log("component did mount");
        }
        else {
            console.log("component did update");
        }
    })

    const updateState = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h1>Counter Component Called</h1>
            <h1 onClick={updateState}>{counter}</h1>
        </div>
    )
}
export default Counter;