function fruitBasic(){
    return alert("Bahari fruit") // this will not even be noticed when clicked on fruitBasic.
}

function ClickEvent(){
    function fruitBasic(){
        return alert("Fruits");
    }
    const fruit=(name)=>{
        return alert(name);
    }
    
    return(
        <div>
            <h1>Event and function call</h1>
            <button onClick={fruitBasic}>Click Me</button> <br/> {/* function without passing parameter */}
            <button onClick={()=>fruit("apple")}>apple</button>  <br/> {/* function with passing parameter*/}
            <button onClick={()=>fruit("banana")}>banana</button> <br/> {/* function with passing parameter*/}
        </div>
    )
}

export default ClickEvent;