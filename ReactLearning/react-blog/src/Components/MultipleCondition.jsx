import { useState } from "react"

function MultipleCondition(){
    const[count, setCount] = useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Counter++</button>
            <button onClick={()=>setCount(count-1)}>Counter--</button>
            {
                count==0?<h3>Count = 0</h3>
                :count==1?<h3>Count = 1</h3>
                :count==2?<h3>Count = 2</h3>
                :count==3?<h3>Count = 3</h3>
                :count==4?<h3>Count = 4</h3>
                :count==5?<h3>Count = 5</h3>
                :<h3>Count else</h3>
            }
        </div>
    )
}

export default MultipleCondition;