import { useState } from "react";

function DisplayMovie({title, date}){

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <p> The movie is: {title}</p>
            <p> The release date was on: {date}</p>
            <button onClick={handleClick}>Click</button>
            <p>Counter: {counter}</p>
        </div>
    )
}

export default DisplayMovie; 