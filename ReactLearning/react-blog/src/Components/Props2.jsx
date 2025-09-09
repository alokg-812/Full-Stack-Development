import Props1 from './Props1';

function Props2(){
    let obj1={
        "name":"Alok",
        "age":20,
        "email":"alok@gmail.com",
        "salary":45000
    }
    let obj2={
        "name":"Akanksha",
        "age":21,
        "email":"akanksha@gmail.com",
        "salary":50000
    }
    return(
        <div>
            <Props1 objt={obj1}/>
            <Props1 objt={obj2}/>
        </div>
    )
}

export default Props2;