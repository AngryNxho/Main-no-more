import DisplayMessage from "./DisplayMessage";
import {useState} from 'react';

function App() {

    const secondName = 'Lucas';
    const initialName = 'Ignacio';
    const [value, setValue] = useState(initialName);

    const handleClick = () => {
        setValue(prevName => [prevName, secondName])
    }

    return (
        <div>
            <DisplayMessage name={initialName}/>
            {value}
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default App;