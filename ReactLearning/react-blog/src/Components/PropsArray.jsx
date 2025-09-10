import Props2 from "./Props2";

function PropsArray(array){
    console.log(array);
    return(
        <div>
            <h3>Array Props Component</h3>
            <h5>{array[0]}</h5>
        </div>
    )
}

export default PropsArray;