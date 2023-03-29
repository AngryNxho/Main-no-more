import DisplayMessage from './DisplayMessage'


function App({name}){

    return (

        <div>
            <input type="text" placeholder='Name'/>
            <button onClick={handleClick}>Click</button>
            <DisplayMessage name={name}/>
        </div>
    )
}

export default App;