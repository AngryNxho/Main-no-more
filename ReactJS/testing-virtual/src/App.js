import DisplayMessage from './DisplayMessage'
import {useState} from 'react';

function App(){

   const [nam, setName] = useState([]);


    const handleClick = () => {
        setName()
    }

    return (

        <div>
            <input type="text" placeholder="Name"/>
            <button onClick={handleClick}>Click</button>
            <DisplayMessage ></DisplayMessage>
        </div>
    )
}

export default App;