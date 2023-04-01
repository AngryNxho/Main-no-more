import DisplayMessage from "./DisplayMessage";
import {useState} from 'react';

function App({newName}) {

    const third = ['Lucas'];
    const names = ['Ignacio'];
    const [value, setValue] = useState(names);

    const handleClick = () => {
        setValue(names.push(third))
    }

    return (
        <div>
            <DisplayMessage name={names}/>
            <br />
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default App;