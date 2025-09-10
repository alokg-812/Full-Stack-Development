import Props1 from './Props1';
import PropsArray from './PropsArray';

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

    let arr=[1, 'hello', null, true]

    return(
        <div>
            <PropsArray array={arr}/>
            <Props1 objt={obj1}/>
            <Props1 objt={obj2}/>
        </div>
    )
}

export default Props2;