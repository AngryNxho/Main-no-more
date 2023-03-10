function ShowMovies({title}){
    
    const handleClick = ()=>{
        console.log('Hello There!!');
    }

    return (
        <div>
            <div className="container">
            <input title={title} type="text" placeholder="Ex: Fight Club"/>
                <button onClick={handleClick}> Add Movie</button>
            </div>

        </div>
    )
}

export default ShowMovies;