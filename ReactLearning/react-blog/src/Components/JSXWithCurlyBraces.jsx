function CurlyBraces(){
    const name="alok";
    let a=10;
    var b=90;
    function div(){
        return b/a;
    }
    let arr=['alice', 'bob', 'charles', 'dean', 'eliza'];
    let obj={
        'name':'alok gupta',
        'age':20,
        'currentYear':2
    };
    return(
        <div>
            <div>{name}</div>
            <div>{a+b}</div>
            <div>{div()}</div>
            <div>{arr[0]}</div>
            <div>{obj.name}</div>
            <div>{obj.age}</div>
            <input type="text" value={obj.name} />
        </div>
    )
}

export default CurlyBraces;