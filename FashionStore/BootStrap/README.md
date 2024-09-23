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

### 8. Bootstrap grid
- .row 
- .col : responsive
- .col-{size} : 1 to 12


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
```
<div class="input-group">
        <span class="input-group-text">&#8377;</span>
        <input type="text">
        <span class="input-group-text">.00</span>
</div>
```

>[!Note]
>*

## Validation part:

* Initially, validation in a form like the disappearance of the '*' symbol through javascript but when it was seen to use very frequently, CSS inheritance code was written through which we can do that validation part. 

### CSS classes for validating the elements:
1. :required:{_true/false_} it configures when the field is defined with required.
2. :optional:{_true/false_} it configures when the field is not defined with required.
3. :valid: it defines effects when all validations attributes are satisfied.
4. :invalid: it defines effects when the field validation returns an error.
Ex:
```
input:required+span{
            color: red;
            display: inline;
}
input:optional + span{
            display: none;
}
<form>
        <dl>
            <dt>UserName</dt>
            <dd>
                <input type="text" name="txtUsername" required><span>*</span>
            </dd>
            <dt>Password</dt>
            <dd>
                <input type="text" name="txtpwd" required><span>*</span>
            </dd>
            <dt>Age</dt>
            <dd>
                <input type="text" name="txtAge"><span>*</span>
            </dd>
        </dl>
</form>
```

**Output:**
![image](https://github.com/user-attachments/assets/08339fea-3b52-419b-a758-5684d1bb3edd)


## Multimedia with HTML:

* marquee
  ```
  <marquee>
  ```
* audio
  ```
  <audio>
  ```
* video
  ```
  <video>
  ```
* embed
>[!Note]
> {_Used till HTML4 only and til then applets and swings were in use_
