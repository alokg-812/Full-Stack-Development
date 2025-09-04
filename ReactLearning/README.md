# React Learning

## What is React?
_Ans:_
- React is Javascript library
- React is used to make web front-end application
- With the use of React, we make `SPA(Single Page Application)`.
- Ex:
  - [nasa](https://nasa.gov) is a multi page website, which gets reloaded fully when clicked somewhere.
  - [react](https://react.dev) is a single page webiste.

### Why React JS?
* Fast because of virtual DOM.
* Large comminuty.
* Easy to learn.
* Learning curve is also less compare to other UI technologies.

### More about react:
- Developed by Facebook.
- Current version: `19.1.0`(in march 2025).
- React helps in learning `react native`, helpful for mobile development.


## What we will learn in React JS Course
* Setup
* Basics
* Hooks
* Form handling
* Routing
* API calls
* Advanced concepts
* React 19 features
* Redux
* Mini Project
* Tailwind with React
* Main Project
* Interview Question
* Query shorts


## Why Vite for Project Setup?
- Vite is a fast development server and build tool.
- Efficient production build.
- Simple Configuration.
- Typescript Support.
- Vite supports features like CSS pre-processors, CSS modules.


* Whenever vite is created, the first page that is rendered is `index.html`.
![image](https://github.com/user-attachments/assets/d1102f7c-1ef2-472e-941c-c4c192e14cab)
<br>

* index.html's body file further contains two major parts, a `div` with `id="root"` and a script tag with source of `src="/src/main.jsx"`.
* The `src="/src/main.jsx"` calls up the `main.jsx` file.
* Hence the order of loading is something like 
  1. _index.html_
  2. _main.jsx_
* <img width="667" height="336" alt="image" src="https://github.com/user-attachments/assets/1e7377ac-8228-4dcc-aa50-2fa9eab86546" />

* The `main.jsx`file sets up the starting point of the React app that:
  - Loads styles and main component.
  - Finds the root HTML element (<div id="root">).
  - Renders the app inside that element using React.
* We preferably use Capital letters to give the components name because for the browser, if the component name starts with a small letter, it is just an _HTML Tag_.
  - Components -> Capital letter
  - Tags -> small letter

### App.jsx

<img width="1341" height="848" alt="image" src="https://github.com/user-attachments/assets/d2d9c379-ccfd-451a-9d9b-6d7010f2820f" />

## File and Folder Structure of React App
- Folder Structure
  - Most Important Files
    - `package.json` : The most important file
    - `package-lock.json` 
  - Config Files


### 1. `package.json`
- 📦 `package.json` is the heart of any Node.js/ React/ Vue/ project.
- It keeps track of:

| Section                         | Meaning                                                 |
| ------------------------------- | ------------------------------------------------------- |
| `name`                          | Name of your project                                    |
| `version`                       | Version of your app (like `1.0.0`)                      |
| `scripts`                       | Shortcuts to run commands like `start`, `build`, `test` |
| `dependencies`                  | Packages your app **needs to run**                      |
| `devDependencies`               | Packages your app **needs only during development**     |
| `main`                          | Entry point of your project (usually `index.js`)        |
| `keywords`, `author`, `license` | Meta info (optional)                                    |

#### dependencies vs devDependencies
* `dependencies`: Core plugins your app uses (needed even after deployment)
* `devDependencies`: Tools for developers (needed only during coding/testing/building)
* Example:
  * `react` and `react-dom` go into dependencies → We need them to run the app.
  * `eslint`, `prettier`, `vite`, or `webpack` goes into devDependencies → Only needed while writing the code or building the app.


### 2. package-lock.json
As we have project details in our package.json file, the package-lock.json contains the nested details of our project.
- **eg#01:**
<img width="1197" height="1238" alt="image" src="https://github.com/user-attachments/assets/6ca16df7-f69f-4035-b5c2-dbcb5a8e6619" />


## React Components
* What is component?
* How to use component?
* Role of component in a React application
* Writing first react component
* Difference between component and function

**Components are smaller UI parts of any react app** <br>
<img width="1089" height="438" alt="image" src="https://github.com/user-attachments/assets/e7c24b3f-4ecd-49d9-bc5f-ea6f84375afd" />
* Multiple components can exist in a single component.
* Even `App.jsx` is a component which is considered as the root component.
* Components name should and must start with a capital letter like `Header` and not header.
* **eg#:**
  * ```jsx
    function Fruit(){
      return(
        <div>
          <h1>First React Component making</h1>
        </div>
      )
    }
    export default Fruit
    ```
* 

### Import and Export in React

The `import` and `export` statements are part of **ECMAScript 2015 (ES6)**, not React itself, but they are fundamental to how React components and files are structured.
1. Default Export/Import
2. Named Export/Import
3. Multiple Export/Import

  
* **a. Default Export/Import**: Each file can have only one `default export`. This is typically used for the main component or function of a file. When importing, we can give it any name we want.

    ```javascript
    function MyComponent() {
      return <h1>Hello</h1>;
    }
    export default MyComponent;

    // In another file
    import MyComponent from './MyComponent';
    ```

* **b. Named Export/Import**: A file can have multiple **named exports**. They are useful for exporting helper functions, constants, or additional components. When importing, we must use the exact names defined in the source file.

    ```javascript
    // In utils.js
    export const name = 'John';
    export function sayHello() {
      return 'Hello!';
    }

    // In another file
    import { name, sayHello } from './utils';
    ```

* **c. Multiple Export/Import**: We can mix and match default and named exports in a single file.

    ```javascript
    // In MyComponent.js
    export default function MyComponent() {
      return <h1>Main Component</h1>;
    }

    export const name = 'Jane';

    // In another file
    import MyComponent, { name } from './MyComponent';
    ```

### JSX

JSX stands for `JavaScript XML` or `JavaScript Syntax Extension`, both terms are used. The official React documentation refers to it as a "syntax extension to JavaScript" that allows us to write HTML-like markup directly within a JavaScript file.

  * **JSX with Curly Braces `{}`**: Curly braces are a special syntax in JSX that lets us "escape back into JavaScript." Anything inside them is treated as a regular JavaScript expression.
      * **Use Variable with JSX**: We can embed a variable directly into our JSX.
        ```javascript
        const user = 'Alok Gupta';
        const element = <h1>Hello, {user}</h1>;
        ```
      * **Condition inside JSX**: We can use a **ternary operator** for simple conditional rendering.
        ```javascript
        const isLoggedIn = true;
        const button = <button>{isLoggedIn ? 'Logout' : 'Login'}</button>;
        ```
      * **Using Function with JSX**: We can call a function that returns JSX.
        ```javascript
        function getGreeting(user) {
          return <h1>Hello, {user}!</h1>;
        }
        const element = getGreeting('Alok');
        ```
      * **Operations inside JSX**: We can perform mathematical or string operations.
        ```javascript
        const sum = 2 + 2;
        const element = <p>The sum is {sum}.</p>;
        ```
      * **Object and Array with JSX**:
          * **Objects** can't be rendered directly. We would typically access a specific property from an object.
          * **Arrays** of JSX elements are rendered as a list. This is commonly used to render a list of items.
        <!-- end list -->
        ```javascript
        const numbers = [1, 2, 3];
        const listItems = numbers.map((number) => <li>{number}</li>);
        const element = <ul>{listItems}</ul>;
        ```
      * **HTML Tag Properties with JSX**: We use curly braces to pass JavaScript values to props. For example, to set an image `src` or an `id` attribute. Note that some HTML attributes are renamed in JSX to avoid conflicts with reserved JavaScript keywords (e.g., `class` becomes `className`, `for` becomes `htmlFor`).

### Click Event and Function Call
  * **Difference between JS Function Call and React Function Call**:
      * In plain JavaScript, we often attach an event listener to an element using `element.addEventListener('click', myFunction)`.
      * In React, we attach an event handler directly to the JSX element using camelCase, e.g., `onClick`. We pass the function itself as the value, **not** the result of calling the function.

  * **Make Function**: We can define a function using standard JavaScript syntax.
    ```javascript
    function handleClick() {
      console.log('Button clicked!');
    }
    ```

  * **Make Button and Click Event**: Attach the `onClick` event handler to a `<button>` element.
    ```javascript
    <button onClick={handleClick}>Click Me</button>
    ```

  * **Call Function on Click Event**: When the button is clicked, React will execute the `handleClick` function.
  * **Call Arrow Function**: It's common practice to use an arrow function directly in the JSX. This is particularly useful for passing arguments.
    ```javascript
    <button onClick={() => console.log('Button clicked!')}>Click Me</button>
    ```

  * **Pass Params with Function Call**: To pass parameters to a function, we must wrap the function call in an arrow function. If we don't, the function will be called immediately when the component renders.
    ```javascript
    function handleWithParams(name) {
      console.log(`Hello, ${name}!`);
    }
    <button onClick={() => handleWithParams('React')}>Click Me</button>
    ```

### Upgrading React Versions

The official React documentation recommends using a package manager like **npm** or **yarn** to manage our project's dependencies.
  * **Check Current Versions in Project**: Use the command line to check the versions of React and React-DOM installed in your project.
      * Using **npm**: `npm list react react-dom`
      * Using **yarn**: `yarn list --pattern "react|react-dom"`

  * **Update React Versions**: To update to the latest stable version, we can use the `install` command with the `@latest` tag.
      * Using **npm**: `npm install react@latest react-dom@latest`
      * Using **yarn**: `yarn add react@latest react-dom@latest`
      * For major version updates (e.g., from v17 to v18), refer to the official **React blog** for a detailed migration guide.













