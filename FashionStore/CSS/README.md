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

* ``
  <marquee>
  ``
* ``
  <audio>
  ``
* ``
  <video>
  ``
* `` embed ``_[Used till HTML4 only and til then applets and swings were in use]_

### Some important attributes related to marquee element:
|Attribute|Description|
|-|-|
|scrollamount|Control the marquee scrolling speed[1 to 100]|
|direction|It specifies the scrolling directions, which can be left, right, up or down|
|width and height|Sets the widht and height of the content|
|loop|specifies the number of time marquee content need to display|
|bgcolor|It sets the background area|
**Syntax:**
```
<marquee scrollamount="75">HI</marquee>
```


### Key points related to audio and videos:
|Attribute|Description|
|-|-|
|Autoplay|It uses "boolean" value[true/false]. It enables autoplay set to true|
|controls|It defines control for the media-player. Controls can be like seekbar, and play/resume etc..|
|loop|It uses a boolean value, which allows to loop the video continously.|
|muted|Upon loading a page, if the video/audio has to be muted, we use this attribute.|
|poster|To represent a thumbnail on video before playback.|
|src|It defines the name and location of video content.|

________________________________________________________________________________________________________________________________________________
# CSS
 - Styles(CSS) provides an extra attribute through which an appearance can be changed to get a good look and feel.
 * We can link CSS to HTML in 3 ways
 * * Inline
   * Embedd
   * External
 - In case of styling language, we go for a MIME type called text/CSS.
```
<link rel="stylesheet" href='path to external CSS file'>
<style type="text/CSS">
    // content goes here
</style>
<element style="attribute2: value; attribute1: value;......."></element>
```
  
___________________________________________________________________________________________________________________________
## 1. **Inline:**
Ex:
```HTML
   <element style = "attribute:value; attribute:value; attribute:value; ..."></element>
```
>[!Note]
> Applying the style through inline is faster as it is local to that particular element
> It is best suited only, when we want to use that style for that particular element.

**LIMITATIONS:**
- Increase in redundancy as the scope is limited to that line we need to rewrite the instructions again to get the effect for another element.
___________________________________________________________________________________________________________________________
## 2. **Embedd:**
```CSS
<style type="text/CSS">

<style>
```

#### Different cases to look about:
1. If style eleement is places inside head element than the code owuld be loaded to browser memeoyr and it would be used at the later stage as per our requirement
```HTML
<head>
    <style>
        h1 {
            background-color: red;
            text-align: center;
        }
    </style>  
</head>    // browser memory

<body>
    <h1>Hii</h1>
</body>
```
2. Inside the body
If we do so, then at the time of rendering elements, style effect would be applied by the browser

3. Outside the HTML element
In this case also, same as case -2  but some time it would behave abnormally in somw scenarios
_________________________________________
## Media Type in CSS:

>[!Note]
> * Q. Why MIME type should be given?
> * Ans: to tell the browser how to render a page
> * Q. Why should we tell to browser?
> * Ans: Because we would have `{}` in our code. In general world,:
> * * `{}` indicates:
>   * json file
>   * java code
>   * css styling


## Media type in CSS:

Q. What is mediatype for style?
> Ans:
> * It configures your styles for various devices and viewport.
> * We can set styles fo screen, print and speech.
```HTML
<style type="text/CSS" media="all/screen/print/speech..">
    x{
         ....
         ....
     }
</style>
```
Here-
- screen: to see the effects on the screen.
- print: to see the effect to take pictures

___________________________________________________________________________________________________________________________
## 3. External:
  => We can write styles in separate stylesheets.
  
  => Stylesheets have an extension of '.css'.
  
  => Styles can cascade the HTML page and hence the name _Cascading Style Sheet_
  
  => We can access css files across pages.
  
  => If we are using external files, then number of requests will increase for a page, which internally increase the page load time.
  
⭐Structure:

- _Fashion Store_
- * public
  * * docs
    * images
    * audios
    * videos
  * src
  * * scripts
    * styles
    * - CSS
      - ticket-effects.css
- index.html
>[!Note]
> ```HTML
> <link rel="stylesheet" href="path_to_CSS_file">
> ```
> ticket-effects.css is linked with the index.html file using


QS: What is minification?:
> Ans:
- Minification is the process of compressing CSS.
- It is always recommended to minify and use the CSS file for production.
- CSS original files will occupy more space, we have to use them for development but not for production

**Priority Order:**
> 1. Inline
> 2. Embed
> 3. External
> 4. 👉 If new properties are defined in external, embed, inline, all will be applied

```HTML<head>
    <style>
        h1 {
            color: blue;
            text-align: center;
        }
    </style>
    <link rel = "stylesheet" href = "test-effect.css">
</head>

<body>
    <h1 style="color:red; background-color: black;"> Web Development </h1>
</body>
```
![image](https://github.com/user-attachments/assets/156c2cbc-3ae7-4124-98fd-f669939bf0c4)

Here, **inline>>embed>>external**

___________________________________________________________________________________________________________________

## CSS Selectors
It refers to the process of selecting an element in a web page.
![image](https://github.com/user-attachments/assets/918684ae-ce97-4634-862a-cea382491907)


**CSS selectors are classified into various categories:**
> Primary:
1. Primary selectors.
2. Rational selectors.
> Pseudo Selector:
3. Dynamic Pseudo classes.
4. Structural Pseudo classes.
5. ELement Pseudo classes.
6. Validation State Pseudo classes.
> Basic Selectors
7. Attribute selectors.
8. Universal selectors.
9. Root selectors.
10. Behavioural selectors.
___
## 1. Primary Selector:
id selector, class selector, type(tag) selector.

1. ID selectors
   
   -ID refers to identifying an element with unique names
   - ```HTML
     #library{
        color: red;
     }

     <body>
         <h1>HTML</h1>
         <h1>CSS</h1>
         <h1>JS</h1>
         <h1 id="library">REACT JS</h1>
     </body>
     ```
>[!Note]
> In real-time coding, normally we write multiple designs( styles with effects):
> * To use this design on multiple elements if we go for id spectator then the effects would not be applied on the 
  elements. To resolve this problem, we go for class selector as an example of bootstrap.
> * When we give id like : id = "id1 id2", then no effect will be seen.
> * But when we give the id like ``<ele id="id1" id="id2" id="id3"...> </ele>``, so the first id will have effect on the element.

2. Class selectors
- If we want to apply multiple effects for an element then we go for class selector
- ```HTML
  <elementName class="classname1 classname2 classname3 ..."
              data goes here
  </element>
  ```
3. Type selectors.
   - We target the element directly by referring to the token(tokens also known as tags)
   - ```HTML
     h1{
        color:red;
     }
     ```
_______________________________________
     ```HTML
            <head>
            <style>...</style>
            link rel="..." href="..." →stored in browser memory and interpreted line by line
     ```

>[!Tip]
>  **FAQs:**
> * If styles are defined for any element in all three ways, then which set of effects would be applied?
> * * First inline, then embed, and then external
> * If the style container is defined with the same attributes in both head and body sections, then which set of effects would be applied?
> * If the style container is defined with the same attribute multiple times in a body, then what set would be applied?


>[!Note]
>  **CSS Rules:**
>  **CSS Rules:** 
>  **FAQs:**
>  - If we define the style for any element using all three primary selectors, which one would be applied??
>  - * ID name >> class name >> type
>    * If different attributes are present, then all will be applied.
>  - If same attributes are defined using ID selector in embed and external file, which set would be applied?
>  - * Yes we can do like not giving 2 names with same property but different names, in that case, we can use the ',' delimiter to sort the issue like #idname,.classname,typename{ // properties go here}

Ex:
```HTML
.text, #styling, h1{
   color: blue;
   text-align: center;
}
   <h1>HTML</h1>
   <h2 id="styling">CSS</h2>
   <h3 class="text">JS</h3>
 ```
___________
## 2. Rational Selector:
👉 We can select elements using parent and child hierarchy.

👉 We can also select elements using siblings.

- ``parent child``: all child elements in specific parents
- ``parent>child``: only direct child elements in specific parent
- ``ElementA + ElementB``: adjacent selector[siblings]
- ``ELementA ~ ElementB``: generic siblings


Ex:1
![image](https://github.com/user-attachments/assets/f777df15-29d2-4761-8325-a91d9188f0a0)


Ex:2
![image](https://github.com/user-attachments/assets/8b1a3cf3-a421-458b-9316-a20649592150)
________________________
## 3. Attribute Selector:

Syntax:
```HTML
elementname[attributename]{

}
elementname[attributename="value"]{

}
```

>[!Note]
> Meta Character Binding:


|Condition|Purpose|
|-|-|
|[attribute="val"]|Equal specifies that it should be exact match.|
|[attribute^="val"]|It refers to the value starting with specified.|
|[attribute$="val"]|It refers to the value ending with specified.|
|[attribute*="val"]|Matches the terms at any location(same as % in SQL).|
|[attribute]="val"]|Name starts with specified and is separated with "-".|
|[attribute~="val"]|Name starts with specified term and not binded with other words.|
_________________

## 4. Dynamic Pseudo Class Selector:
- Dynamic indicates that the effect can change according to state and situation.
- Pseudo means false representation.
- Class refers to Program template in computer programming, it contains predefined logic and data, which you can implement and customize according to the requirements.

|Selectors:|Description:|
|-|-|
| :link|Specifies effect for Hyperlink[anchor in default state]|
| :visited|It defines effect for visited links[andchor in visited state]|
| :target|It defines effect for the target element[used normally in intradocument(not scrollable)] {element is specified hyperlink}|
| :hover|It defines effects when mouse pointer is over[mouseover]|
| :active|It defines effects when link is in active state[mousedown]|
> 🌟🌟 Class can transform element apperance, transformatin time can be controlled by using "CSS Attribute called transition."
_______________________________________
## 5. Validation State Pseudo Classes:
|Selector|Description|
|-|-|
| :valid|It defines effects for element if tit is valid against the validation defined.|
| :invlid|It defines effects for an element when it is invalid.|
| :required|It defines effects for element when it is verified with requirement.|
| :optional|If it is not defined with required validation then it is treated as optional|

- Validation can be verified using:
- * Minlength
  * Maxlength
  * Required
  * Pattern
  * Email
  * Url etc...
_______________________________
## 6. ELement State Pseudo Classes:
|Selector|Description|
|-|-|
|enabled|It defines effects when the element is enabled.|
|disabled|It defines effects when the element is disabled.|
|read-only|It defines effects when the element is set to read-only.|
|checked|It defines effects when the element is checked.|
|focus|It defines effects when element is focused.|
______________________________
## 7. Structural Pseudo Classes:
>[!Note]
> We can target our effects based on the position of the element in parent and child hierarchy.


|Selector|Description|
|-|-|
| :first-child|It defines effects only for first child element.|
| :last-child|It defines effects only for last child element|
| :nth-child(Level Number)|It defines effects only to specific child element that occurs at given level.
1.Level number starts with
2. Index number starts with 0.
You can also define the pre-set value like "even & odd" to apply effects based on even and odd occurences|

- Level number starts with 1.
- Index number starts with 0.
- We can also define the pre-set values like 'even & odd' to apply effects based on even and odd occureneces respectively.
```HTML
 nth-of-type(3|3n|3n+1) :: select elements from top nth occurrence.
 nth-last-of-type(3|3n|3n+1) :: select elements from bottom nth occurrence.
```


## 7. Behavioural and Occurance class*:
|**Selector**|**Description**|
|-|-|
|::first-line|Effects for first line in paragraph.|
|::first-letter|Effects for first character.|
|::before|Effects or content to add before the current element.|
|::after|Effects or content to add after the current element.|
|::place-holder|Effects on the placeholder elements.|

Ex:
![image](https://github.com/user-attachments/assets/8ec8695e-4273-470b-b744-f622129c522d)
```HTML
<style>
    ol li:first-child {    /* first item of list*/
        color : red;
    }
    ol li:last-child {   /* last item of list*/
        color: green;
    }

    ol li:nth-child(even) {  /* those items which are in even position */
        font-size: 30px;
    }
</style>
```
Output:

![image](https://github.com/user-attachments/assets/34b7aa77-ec09-4a9c-8b5c-c4a70e2d286e)

## 8. Universal Selector:
* It is mainly used to apply the effects for all the elements on a page.
* Syntax:
```html
<style>
    * {
        attribute1: value1;
        attribute2: value2;
        .
        .
        .
        attribute-n: value-n;
    }
</style>
```
__________________
## 9. Root Selector:
* will be discussed in Javascript.
____________
## 10. Language Selector:
* It is used to give the effects based on a language configured for an element. If your page contains multiple langauge data then to define the effects based on a specific language, we go for language selector.
* Syntax:
```html
<style>
    elementName:lang(lang) {
        attribute1: value1;
        attribute2: value2;
        .
        .
        .
        attribute-n: value-n;
    }
</style>
```

____________
## CSS Inheritance:

Ex:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INHERITANCE</title>

    <style>
        .container {
            border: 2px solid black;
            padding: 10px;
            margin: 15px;
            color: white;
            font-family: Brush script MT;
            background-color: black;
        }

        h1 {
            border: inherit;
            background-color: white;
            color: black;
        }

        p {
            font-family: initial;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Web Development</h1>
        <p>HTML</p>
    </div>
</body>
</html>
```

DOM:   ![image](https://github.com/user-attachments/assets/f29efdf4-83d0-4446-9cc5-161904f86cd9)

Default nature of p and h1 :
```HTML
p {
    display : block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
}

h1 {
    display : block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
```
* In CSS inheritance is the process of configuring parent effects to child elements.
* child elements automatically implement some of the parent feature which we can control by using following css values:
1. inherit
2. initial
3. unset

* All the properties of the parent will not reach to the child, if we want it to reach to the child, then we use ``inherit`` value on that particular attribute all ``all: inherit;`` attribute
* After inheriting the attribute from the parent if the child is interested in changing the value, the child can change the value or set the value to default appearance.
* To remove the default nature of a particular element we use ``unset`` value to the attribute

## CSS BOX MODEL:
1. ``margin``
2. ``padding``
3. ``border``
4. ``border-radius``
5. ``width``
6. ``height``
7. ``box-shadow``
8. ``border-image``


### 1. ``margin``
* It specifies the space around border.
* You define by using the following properties:
* * margin [short hand - sets in all direction]
  * margin-top
  * margin-bottom
  * margin-left
  * margin-right

Syntax:
```HTML
{
    margin: 0px 0px 0px 0px; /*top , right, bottom, left*/
}
```

### 2. ``padding``
* It specifies the space around content
* You can define
* * padding [short hand - sets in all direction]
  * padding-top
  * padding-bottom
  * padding-left
  * padding-right
* All options are similar like margin

Syntax:
```HTML
{
    padding: 0px 0px 0px 0px; /*top , right, bottom, left*/
}
```

### 3. ``border``
* ``border`` - short hand for style, color and width
* ``border-style: dotted, double, dotted, solid, dashed, etc..; ``
* ``border-width: border-size;``
* ``border-color: border-color;``
* ``border-left`` - short hand for style color and width
* ``border-left-style``
* ``border-left-width``
* ``border-left-color``
> Similarly for all directions [Indicates top, right, bottom]

### 4. ``border-radius``
* ``border-radius`` - short hand for all directions (top-left, top-right, bottom-right, bottom-left)
* ``border-top-right-radius`` 
* ``border-top-left-radius``
* ``border-bottom-right-radius``
* ``border-bottom-left-radius``
* In order to make image to appear like a proper circle, width and height value of an image should be made equal to border-radius value.

![image](https://github.com/user-attachments/assets/77523a3c-9f60-499a-897a-cca2aa793bac)

### 5. ``Border-image:``
* We can set image as border by using attributes like : border and border-image

Syntax:
```HTML
      {
            border: 15px solid transparent;
            border-image: url() stretch/space 1-100;
      }
```

## CSS Units:
> Units define size and positions.
> They are used to define the dimensions and location of elements in a page.
> You can configure size with: height and width.
> The CSS units are categorized into 2 groups:
> * Absolute Length Units
> * Relative Length Units.

**Absolute Length Units:**
* They are note relatice to anuthing else and are generally constiders as normal units.
* THese are not affected by other relative ements and their unis.
* Theu are not affected bu patent or adjacenet t

>[!Note]:
> Usage of Absolute Path:
> * When we are creating an animation on a button click, if we want to zoom then go for the "absolute path".
> * If we want to move the objects a little far in a screen, we go for "inch/cm/mm".


|Unit|Name|Equivalent to| 
|--|--|--|
|cm|Centimeters|1 cm = 96px/2.54 = 37px|
|mm|Milimeters|1/10th of 1 cm|
|Q|QuarterMilimeter|1Q = 1/40th of 1 cm|
|in|Inches|1in = 2.54cm = 96px|
|pc|Picas|1/6th of 1 inch|
|pt|Point|1/72th of 1 inch|
|px|Pixels|1/96th of 1 inch|

#### **Example 1 of Relative Unit:**
* These are related to other content in the page.
* The size of any element can be determined based on its parent, child, or adjacent.
* The advantages are when the parent element size is changed it will relatively affects the child element also.
* _When we use 'rem', we need to target the root element(**HTML**)._

|Unit|Relative to|
|--|--|
|em|It uses the font size of the parent element and applies it to the current element.|
|hi|Note: 1 em = 100% of parent element , 0.5em = 50% of parent element|
|rem|Font size to the root element size.|
|%|Relative to the view port|


## CSS Positions:
- Generally, elements are placed according to the document layout flow.
- Position allows to make element behave differently and take them out of the document flow.
- CSS Positions are defined by using "position" style attribute.

1. static
2. absolute
3. fixed
4. sticky
5. relative

#### 1. Static
- This value would not disturb the layout of the page.
- It will not allow to change the position of element.
- Static Position would not be affected by top, right, bottom, left(if defined).
- Generally in JavaScript, if we want to move the elements we can change its place, but if we don't want to change then we need to ake those elements as 'static'
- While designing a responsive design also the element should not be changed dynamically, then we need to for position as 'static'
```HTML
```
#### 2. Absolute:
- It disturbs the normal flow of the layout of the page.
- Absolute Position would be affected by top, right, bottom, left.
- * It attaches to the content of the page and moves along with the content of the page.

#### 3. Fixed:
- It disturbs the normal flow, the position of the is fixed when we use with top, left, bottom, right attributes.
- It would not move from the position defined.
- It locks the component at fixed position on page.
- * It attach to browser of the page and it won't move along the content along the page.
 
#### 4. Sticky:
- It does not disturb the layout of the page.
- It would not allow you to change the position.
- It can make the elements sticky after reaching a specified position.
 
#### 5. Relative Position:
- It is defined for parent element.
- The parent element keeps all child elements relative to the context.
- It requires placement of child element using absolute.
- Fixed will keep element regarding the page.


## CSS Z-index

## Working with CSS Display:
* Values of display are:
* 1. `display: none`
  2. `display: block` content will appear in new line(`<br>`)
  3. `display: inline` content will appear in the same line
  4. `display: inline-block` to adjust the dimension of few html elements, we use inline-block. Ex: span, anchor, image, etc...
  5. `display: flex`
  6. `display: grid`
  - > flex and grid are for responsive design.

5. display: flex -
* should be applied on a container only and not on an element.
* by default, the elements present inside the container would be arranged `row-wise`.
* if we apply this effect on elements, we get `abnormal behavior` as the response.
* flex would support adjusting the elements in both `row-wise` and `column-wise`.
* `display- inline` is only applicable for elements and not for container.
> [!Note]
> ```html
>     display:flex;
>     flex-direction: column;
> ```
> The elements present in the container would be adjusted as per the width of the container, if the flex-direction is row, then the elements present in the container would be adjusted as per the height of the container.



### FAQs:
Q: What is the difference between ``display: none`` vs ``visibility: hidden``
> Ans: `visibility: hidden` will not remove the memory reserved for that element on the page whereas `display: none` will remove the memory for the element from the page as a result of which it disturbs the page layout.

Q: 

5 concepts to be asked:
- Selectors
- Inheritance
- Box Model
- 
