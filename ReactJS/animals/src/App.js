import DisplayAnimals from "./DisplayAnimals";
import {useState} from 'react';

function App() {
    
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Add animal</button>
            <br />
            <div>Animals to Show: {count}</div>

            
        </div>
    );
}

export default App
