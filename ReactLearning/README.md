# React Learning

1. [What is React](https://github.com/alokg-812/Full-Stack-Development/blob/main/ReactLearning/README.md#what-is-react)
2. [Real DOM vs Virtual DOM](https://github.com/alokg-812/Full-Stack-Development/blob/main/ReactLearning/README.md#real-dom-vs-virtual-dom)
3. [JSX](https://github.com/alokg-812/Full-Stack-Development/blob/main/ReactLearning/README.md#jsx)
4. [Setting up React Project](https://github.com/alokg-812/Full-Stack-Development/blob/main/ReactLearning/README.md#setting-up-react-project)
5. [Components]()
6. [Props]()
7. [Working with Functions]()
8. [Hooks]()
9. [State Management]()
10. [Form handling]()
11. [Two way data binding]()
12. [Using Local Storage]()
13. [API calling in React]()
14. [useEffect Hook]()
15. [React Router DOM]()
16. [Advanced Routing]()
17. [Context API]()


## What is React?
_Ans:_
- React is Javascript library

## Real DOM vs Virtual DOM
Initially, website had to change something tiny in their website, like clicking a button, the website rerender complete site again, this was very hectic work, hence React introduced the concept of `virtual dom` that just updates the part of the website that has to be changed and not whole website.

<img width="1318" height="529" alt="image" src="https://github.com/user-attachments/assets/9a57a8e8-3864-46b6-b3aa-749ecdda5668" />

## JSX 
- `Javascript XML`
- `HTML` + `Javascript`

### JS vs JSX
- in JS:
```js
var h1 = document.createElement("h1");
h1.setAttribute("Hello");
```

- in JSX
```jsx
var h1 = <H1>Hello</H1>
```

- below both methods are allowed while calling a function in jsx writing
```jsx
function Hello(){
  console.log("Hello");
  
}

// both ways are allowed to call a function in JSX language
Hello(); 
<Hello/>
```

## Setting Up React Project

We set up our project with a package **bundler** that we use to create tasks of our React project, such as compiling code, managing dependencies, and serving our application for local viewing.
- Steps to create React project:
  1. ``` npm create vite```(**preferable**) or ```npm create vite@latest```
  2. enter project name after this
  3. cd to the project name
  4. ```npm install```
  5. ```npm run dev```
  6. the app would automatically render on the `http://localhost:5173/`

### Code Flow in React
<img width="1301" height="557" alt="image" src="https://github.com/user-attachments/assets/f1b4e8be-6051-445b-9e4a-c62bf24edef2" />

<br>

1. `index.html` -> renders the page where only one div is created with id of _**#root**_
2. `main.jsx` -> The content from the multiple files is taken and a new child is created in the _**#root**_
3. `App.jsx` -> The content written for a particular page and is exported to main file.

* Hierarchy order:
  * index.html(superior(dadaji)) -> main.jsx(arranger(papaji)) -> App.jsx(beta)
    




