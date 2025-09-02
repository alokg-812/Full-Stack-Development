import ironMan from "../assets/images/ironMan.png";

function Exercise(){
    function callFunc(){
        alert('Function called!');
    }
    return (
        <div>
            <h1>Alok Gupta</h1>
            <img src={ironMan} alt="Iron Man photo" height={300} width={200}/>
            <ul>
                <li>Invent a traffic light</li>
                <li>Rehearse a Movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFunc}>Click me</button>
            
        </div>
    )
}

export default Exercise;