import { useState } from "react";

function DisplayMovie({title, date}){

    const [counter, setCounter] = useState(0);

    
    return (
        <div>
            <button >Click</button>
            <p> The movie is: {title}</p>
            <p> The release date was on: {date}</p>
        </div>
    )
}

export default DisplayMovie; 