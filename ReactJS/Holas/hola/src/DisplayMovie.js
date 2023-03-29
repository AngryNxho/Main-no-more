import { useState } from "react";


function DisplayMovie({title, date}){


    return (
        <div >
            <h1>The Movie is: {title}</h1>
            <h2>The release year is: {date}</h2>
        </div>
    )
}

export default DisplayMovie; 