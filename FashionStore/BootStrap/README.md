##  Building form using bootstrap classes.

### 1. Container classes

- .container [For smart watches]
- .continer-ss (small) [for mobiles]
- .continer-md (medium) [for mobiles]
- .container-lg [for PC]
- .container-xl [for laptop]
- .container-xxl [for laptop wide screen]
- .container-fluid [for responsive [fit according to device]]


### 2. Margins 
- .m-{size} : margin in all directions
- .ms-{size} : left margin {s = start}
- .me-{size} : right margin {e = end}
- .mt-{size} : top margin {t = top}
- .mb-{size} : bottom margin {b = bottom}

size : 1 to 5

eg. : `<form class="ms-5">` , `<h2 class="ms-4">Bootstrap</h2>`

### 3. Padding
- .p-{size} : padding in all directions
- .ps-{size} : left padding 
- .pe-{size} : right padding 
- .pt-{size} : top padding 
- .pb-{size} : bottom padding 
        size : 1 to 5

### 4. Border
- .border : to give border
- .border-{size} : {1 to 5}
- .border-{contextual} : warning dange success info primary seconday

### 5. rounded
- .rounded
- .rounded-{size} : [1 to 5]
- .rounded-circle
- .rounded-pill : [requires more width]

### 6. widht and height

- .w-{size} : 25, 5, 75, 100
- .h-{size} : 25, 5, 75, 100


### 7. display

- .d-none
- .d-block
- .d-inline
- .d-flex
- .d-flex-wrap 
- .d-flex-nowrap 
- .justify-content-{center, left, between, space-around....}
- .align-items-{center, end, start ,top , baseline}


<aside>
💡

Q: How to design a grid (display: grid)???

To design a grid using Bootstrap, we can use the following classes:

- .row: Creates a horizontal group of columns
- .col-*: Defines the number of columns to span (e.g., .col-4 for 4 columns)
- col-(-size): 1 to 12
- .col-sm-*, .col-md-*, .col-lg-*, .col-xl-*: Responsive grid classes for different screen sizes

Example:

```html
<body class="container-fluid">
    <section class="border border-3 border-success m-3 row">
        <nav class="border border-2 m-2 p-3 col-2">Nav</nav>
        <main class="border border-2 m-2 p-3 col">Main</main>
        <aside class="border border-2 m-2 p-3 col-1">Aside</aside>
    </section>
</body>
```

This creates a responsive grid with 3 columns on medium and larger screens, and 2 columns on small screens.

</aside>
### 9. Bootstrap inbuilt classes for form elements

- 




### Button  classes  : 
1. .btn
1. .btn-{contextual}
1. .btn-outline-{contextual}
1. .btn-sm
1. .btn-lg
1. .btn-group
1. .btn-group-vertical
1. .btn-close
1. .btn-link
1. .btn-toolbar

 ### Input Group Classes:
 - .input-group
 - .input-group-text
#### Syntax:
```html
<div class="input-group">
        <span class="input-group-text">&#8377;</span>
        <input type="text">
        <span class="input-group-text">.00</span>
</div>
```

>[!Note]
>*
