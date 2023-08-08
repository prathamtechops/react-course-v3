import { useState } from "react";
const UseStateBasics = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div>
            <h2>You clicked {count} times</h2>
            <button type="button" className="btn" onClick={handleClick}>
                Increase
            </button>
        </div>
    );
};

export default UseStateBasics;
