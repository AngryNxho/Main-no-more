import DisplayMessage from "./DisplayMessage";
import {useState} from 'react';

function App() {

    const [value, setValue] = useState(''); 

    const handleClick = (e) => {
        setValue('Ignacio');
    };

    return (
        <div>
            <input type="text"/>
            <button onClick={()=>{alert(value)}}>Click</button>
        </div>
    )
}

export default App;