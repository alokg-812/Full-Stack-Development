# Day 1 React
React is not a Framework, its a library developed by facebook to perform DOM operation virtually so that the user will be very happy in


# Day 2 React CDN

React is a library meant for performing DOM operation ina  faster way.
In a webpage, the costliest operation is changing the DOM.

Installation of library can be done in 2 ways:
1. Using CDN
2. Using npm tools.

What is CDN?
Ans: 
* It is a mechanism to request hte resouce from the external computer so that the latency rate would be low.

What is CORS?
* It is a mechanism where two applications are running in two different server where scritps would share the data between them.
*  

# Day 3

Creating an Element

Signature:
```
const element = React.createElement(
      type,        // HTML tag name or React component
      props,       // Object with props/ attributes or null
      ...children  // Child elements or text
)
```

### Accessing the DOM
Signature:
```
      const container = document.getElementById("idName");
      const root = ReactDOM.createRoot(container);
```

### Usage of {} in React.createElement
* It is used to give the attributes to the elements we create dynamically.

```
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script>
        const heading = React.createElement("h1", {}, "Hello React World");
        const root = ReactDOM.createRoot(document.getElementById("root2"));
        root.render(heading);
    </script>
```

![image](https://github.com/user-attachments/assets/21b812fc-847d-49ba-a013-5c447864943b)
```
const heading = React.createElement(
  "div", 
  {id: 'parent'},
  React.createElement(
      "div",
      {id:'child'},
      React.createElement(
          "h1",
          {id:"heading"}, "Hello world from React"
)));
```



