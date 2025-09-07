import Props1 from './Props1';

function Props2(){
    let obj={
        "name":"Alok",
        "age":20,
        "email":"alok@gmail.com",
        "isMarried":false,
        "salary":undefined
    }
    return(
        <div>
            <Props1 objt={obj}/>
        </div>
    )
}

export default Props2;