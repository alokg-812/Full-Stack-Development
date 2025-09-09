import Props2 from "./Props2"

function Props1({objt}){
    return(
        <div>
            <h1>Using Props of JSX</h1>
            {/* <h4>Name: {name}</h4> */}
            {/* <h4>Age: {age}</h4> */}
            {/* <h4>Email: {email}</h4> */}
            <h4>Name: {objt.name}</h4>
            <h4>Age: {objt.age}</h4>
            <h4>Email: {objt.email}</h4>
            <h4>Salary: {objt.salary}</h4>
        </div>
    )
}

export default Props1;