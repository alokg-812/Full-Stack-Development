import { useState } from "react";

function Toggle(){
    const [display, setDisplay]=useState(true);
    return(
        <div>
            <h1>Toggling in React JS</h1>
            <button onClick={()=>setDisplay()}>Toggle UserName</button>
            {
                display?<h2>Alok Gupta</h2>:<h2>No UserName</h2>
            }
        </div>
    )
}

export default Toggle;