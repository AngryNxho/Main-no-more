import {useState} from 'react';

function App() {

    // const [stateCar, setStateCar] = useState(false);
// 
    // const encenderApagar = () => {
        // setStateCar(!stateCar);
    // }

    // return (
        // <div>
            {/* <h3>El coche esta: {stateCar ? 'Encendido' : 'Apagado'}</h3> */}
            {/* <button onClick={encenderApagar}>Encender / Apagar</button> */}
        {/* </div> */}
    // );



    // Usestate Objects

    // const initialState = {name: 'Jhon', age:45, on: 1};
    // const [value, setValue] = useState(initialState)

    // const change = () => {
    //     setValue(prevState => ({...prevState,name:'Tev', on:2}))
    // }


    // return (
    //     <>
    //         <button onClick={change}>SUM</button>
    //         <div className="container">
    //             {value.name}
    //             <br />
    //             {value.age}
    //             <br />
    //             {value.on}

    //             </div>
    //     </>
    // )

     const arr = [4, 5, 6];
     const initialState = [1, 2, 3];
     const [value, setValue] = useState(initialState)

     const change = () => {
        setValue( prevState => [prevState,arr]);
     }
    


     return (
         <>
             <button onClick={change}>Change</button>
            <div className="container">
                {value}
            </div>
         </>
     )



}

export default App;