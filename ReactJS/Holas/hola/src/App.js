import DisplayMovie from './DisplayMovie';
import {useState} from 'react';

function getRandomCinema(){
    const cinema = ['Mr Robot', 'FightClub', 'Game of thrones', 'Breaking bad'];

    return cinema[Math.trunc(Math.random() * cinema.length)]
}

function App(){

    const [movie, setMovie] = useState([])

    const handleClick = () => {
        setMovie([...movie, getRandomCinema()])
    }

    return (
        <div>
            <DisplayMovie 
            title = {handleClick}
            date="1999"/>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}


export default App;