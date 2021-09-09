import React, { useState } from "react";

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function Eightball (props) {
    const [pushed, setPushed] = useState(false);

    function handleClick () {
        setPushed(true)
    }
    
    return (
        <div className="text-center">
            <div id="circle" style={{background: pushed ? props.answers[getRandom(props.answers.length)].color : 'black'}} onClick={handleClick}>
                <h1>{pushed ? props.answers[getRandom(props.answers.length)].msg : 'Think of a question'}</h1>
            </div>
        </div>
    )
}

export default Eightball