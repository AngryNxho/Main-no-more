function DisplayContent({title, img, resume}){
    return (
        <div>
            <h1>This is {title} </h1>
            <img src= {img} />
            <small> {resume}</small>
        </div>
    )
}


export default DisplayContent;

