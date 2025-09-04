import { useState } from "react";
import Counter from "./CounterState";

function ReactState(){
    let [fruit, setFruit]=useState("Apple");
    let handleFruit=()=>{
        if(fruit=='Apple'){
            setFruit("Banana");
        }
        else setFruit("Apple");
    }
    return(
        <div>
            <h1>State in React JS</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change FruitName</button>
            <Counter/>
        </div>
    )
}
export default ReactState;