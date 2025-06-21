# TYPESCRIPT

- TypeScript is an enhanced version of Javascript.
- `Superset` of JS
- TypeScript built on JS with some added new features.

> ▶️ Note: <br>
- TS cann't run directly on the browser, it(`TS Compiler`) first converts the code from TS to JS.

**Ques:** If TS converts into JS and then process, what's the benefit to introduce new language?
<br>

## Benefits of TS:
- Check errors on `Compile Time`.
- Data types.
- Supports Object-Oriented Programming.
- Well managed code.

**eg#01:**

```js
function add(a,b){
    return a+b;
}
console.log(add('2' + '3')); // 5 but it shouldn't.
```

## Versions & History
- Developed by Microsoft
- Current Version - `5.8.3`
- First Released - 01/Oct/2012
- Influenced by - JavScript.

## TypeScript 

- TS files cannot be run on browser, it first needed to convert into js file using `tsc fileName.ts` and then that converted `fileName.js` is linked with HTML files if required.

### Core Data Types:
1. `Number`
2. `String`
3. `Boolean`


### TypeScript v/s JavaScript:

| Feature             | **JavaScript**                             | **TypeScript**                                            |
| ------------------- | ------------------------------------------ | --------------------------------------------------------- |
| **Type System**     | Dynamic (no type checking at compile time) | Static (optional types, checked at compile time)          |
| **Compilation**     | Interpreted directly by browsers           | Compiled to JavaScript using the TypeScript compiler      |
| **Error Detection** | Runtime errors                             | Compile-time error checking helps avoid bugs early        |
| **Syntax**          | Standard JavaScript syntax                 | Superset of JavaScript (JS code is valid TS)              |
| **Tooling Support** | Good                                       | Excellent with features like IntelliSense, autocompletion |
| **Learning Curve**  | Easy for beginners                         | Slightly harder due to types and configuration            |
| **Use Case**        | Suitable for small scripts or web apps     | Better for large, complex, scalable applications          |
| **Community**       | Huge, established                          | Growing fast, especially in enterprise environments       |
| **IDE Support**     | Good                                       | Better with rich editor support like VSCode               |



### Type inference of TypeScript
- Automatic detection of data used in an variable.
- **Ex:**
```ts
let data = 'hello';

data = 10; // will cause an error
```

![alt text](image.png)
















