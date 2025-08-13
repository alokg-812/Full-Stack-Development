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
* The `main.jsx`file sets up the starting point of the React app that:
  - Loads styles and main component.
  - Finds the root HTML element (<div id="root">).
  - Renders the app inside that element using React.

### main.jsx code:
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Explaining each line of code in detail:

#### 1. import { StrictMode } from 'react'

* ✅ **What it does:**  
This line imports a special helper called **`StrictMode`** from the React library.

* 🧠 **Why it's used:**  
`StrictMode` is like a safety net. It **checks your code for potential problems** (like deprecated features or side effects). It doesn’t show anything on the screen—it’s just for development and helps you write better React code.

#### 2. import { createRoot } from 'react-dom/client'

* ✅ **What it does:**
This line imports the `createRoot` function from React's DOM client.

* 🧠 **Why it's used:**
React needs to connect to the actual web page (the HTML file). `createRoot` helps React take control of a specific part of the page and **start showing your app there**.

* Fun fact: This is part of the **React 18+ update**, replacing the older `ReactDOM.render()` method.

#### 3. import './index.css'
* ✅ **What it does:**  
This line brings in a CSS file named `index.css`.

* 🧠 **Why it's used:**  
CSS styles define how things look. This file likely contains **global styles** (colors, fonts, layout rules) that apply to the whole app.

#### 🔴 4. import App from './App.jsx'
* ✅ **What it does:**
This imports the main component of your app called `App` from a file named `App.jsx`.

* 🧠 **Why it's used:**
The `App` component is where your **entire app’s content** (like buttons, pages, lists, etc.) starts. This is the **root component** of your app.

#### 5. createRoot(document.getElementById('root')).render(
* ✅ **What it does:** This tells React:  
“🎯 *Find the HTML element with the ID 'root'*, and I’m going to put my app inside it.”

🧠 **Why it's used:**  
The `index.html` file has a line like:
```html
<div id="root"></div>
````

React grabs that empty `<div>` and fills it with your app's content using the `render()` function.
#### 7-10 ``<StrictMode><App /></StrictMode>``
* ✅ **What it does:**  
This is the **actual app being shown**.

  * `<StrictMode>` wraps the `<App />` component.
  * `<App />` is a React component (we usually write many of these).

* 🧠 **Why it's used:**
React uses this to **start rendering your UI**. The `<App />` component contains your UI structure (header, pages, buttons, etc.).
StrictMode helps catch bugs while doing this.

****
* In main.jsx, all the tags like {function App(){}}, the names are written starting with `Capital Letters`, because react understands that whatever starts with the small letter it is an html tag.

## File and Folder Structure of React App

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


### dependencies vs devDependencies
* `dependencies`: Core plugins your app uses (needed even after deployment)
* `devDependencies`: Tools for developers (needed only during coding/testing/building)
* Example:
  * `react` and `react-dom` go into dependencies → We need them to run the app.
  * `eslint`, `prettier`, `vite`, or `webpack` goes into devDependencies → Only needed while writing the code or building the app.














