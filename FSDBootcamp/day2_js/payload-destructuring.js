function fn(type, ...payload){
    console.log(type);
    console.log(payload);
}

fn('Java', 'script', 'typescript', 'let', 'const', 'var');
// Java
// [ 'script', 'typescript', 'let', 'const', 'var' ]