function DisplayMessage({name}){

    const handleClick = () =>{
        alert(`Hello There ${name}`)
    }


    return (
        <div>
            <h1>Hello There</h1>
        </div>
    )
}


export default DisplayMessage;