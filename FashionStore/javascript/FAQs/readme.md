# FAQ1. What are the issues of Javascript?
Ans: 
1. JavaScript is not `strongly typed`
(No data types enforced on a variable)

```javascript
a = 10;
a = "sachin";
a = false;
a = 13.5;
```

2. JavaScript is not `strictly typed`
(It allows using variables without declaring them)

```javascript
"use strict";
a = 10;
```

3. JavaScript doesn't enforce `uniform data structure`
(Inconsistent data properties can exist together)

```javascript
[
  {
    Name: "samsung", price: 45000
  },
  {
    Product: "LG", cost: 55000
  }
]
```
* JavaScript is not secured and it can be blocked by the browsers.

**Examples:**
- *Trojan*: Installing a virus via JavaScript can allow control of a device (Bad approach).
- *TeamViewer*: Installing remote access software properly can allow control of devices (Good approach).
