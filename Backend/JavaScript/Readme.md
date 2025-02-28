# DOM with JavaScript

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
    <style type="text/css"></style>
</head>
<body>
    <h1 id="title"><strong>Hello</strong></h1>
    <a href="https://google.com">Google</a>
    <input type="checkbox">

    <button class="btn">Click me</button>

    <ul id="list">
        <li class="list"><a href="http://google.com">Google</a></li>
        <li class="list">Second</li>
        <li class="list">Third</li>
    </ul>

</body>
<footer>
    <script src="script.js"></script>
</footer>
</html>
```

## CSS Styles

```css
.Invisible{
    visibility: hidden;
    color: maroon;
}

.huge{
    font-size: 10rem;
    color: red;
    font: bold;
}
```

## JavaScript Code and Explanation

```javascript
// Adds the "Invisible" class to the button, making it hidden
document.querySelector("button").classList.add("Invisible");

// Removes the "Invisible" class from the button, making it visible again
document.querySelector("button").classList.remove("Invisible");

// Toggles the "Invisible" class on the button
// If the class is present, it removes it; otherwise, it adds it
document.querySelector("button").classList.toggle("Invisible");
document.querySelector("button").classList.toggle("Invisible");
document.querySelector("button").classList.toggle("Invisible");

// Adds the "huge" class to the <h1> element, making the font size much larger
document.querySelector("h1").classList.add("huge");

// Retrieves the inner HTML of the <h1> element
console.log(document.querySelector("h1").innerHTML); // Output: '<strong>Hello</strong>'

// Retrieves only the text content of the <h1> element, ignoring HTML tags
console.log(document.querySelector("h1").textContent); // Output: 'Hello'

// Changes the inner HTML of the <h1> element to italicized text
document.querySelector("h1").innerHTML = "<em>Hello Guys</em>";
// Now, <h1> contains: '<em>Hello Guys</em>'

// Selects the first <a> element in the document
document.querySelector("a");

// Retrieves all attributes of the selected <a> element
document.querySelector("a").attributes;

// Retrieves the value of the "href" attribute of the selected <a> element
console.log(document.querySelector("a").getAttribute("href")); // Output: 'https://google.com'

// Changes the "href" attribute of the first <a> element to point to Bing
document.querySelector("a").setAttribute("href", "https://www.bing.com");
```

## Description
This repository demonstrates how to manipulate the DOM using JavaScript. It includes:
- Changing HTML elements dynamically
- Modifying CSS classes
- Querying and updating attributes

### How to Use
1. Open `index.html` in a browser.
2. Open Developer Console (`F12` in Chrome, `Ctrl+Shift+I` in Edge/Firefox) to test JavaScript commands.
3. Modify the script as needed to explore more DOM manipulations.
