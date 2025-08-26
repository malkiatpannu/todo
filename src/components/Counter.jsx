import { useState } from "react";
export default function Counter({ step = 1}){
    const [count, setCount] = useState(0);
    const increment = () => setCount(c => c + step);
    const decrement = () => setCount(c => c - step);
    const reset = () => setCount(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}