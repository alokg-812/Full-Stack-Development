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

### Some important attributes:
Attribute       Description
scrollamount     => Control the marquee scrolling speed[1 to 100]
**Syntax:**
```
<marquee scrollamount="75">HI</marquee>
```
direction
width and height
loop
bgcolor



### Key points related to audio and videos:
* Autoplay - It uses "boolean" value[true/false]. It enables autoplay set to true
* controls - It defines control for the media-player. Controls can be like seekbar, and play/resume etc..
* loop - It uses a boolean value, which allows to loop the video continously.
* muted - Upon loading a page, if the video/audio has to be muted, we use this attribute.
* poster - To represent a thumbnail on video before playback.
* src - It defines the name and location of video content.


# CSS
 - Styles(CSS) provides an extra attribute through which an appearance can be changed to get a good look and feel.
 - In case of styling language, we go for a MIME type called text/CSS.
```
<style type="text/CSS">
    // content goes here
</style>
```
 * We can link CSS to HTML in 3 ways
 * * Inline
   * Embedd
   * External
  
___________________________________________________________________________________________________________________________
* **Inline:**
Ex:
```
   <element style = "attribute:value; attribute:value; attribute:value; ..."></element>
```
>[!Note]:
>* Applying the style through inline is faster as it is local to that particular element

**LIMITATIONS:**
- Increase in redundancy as the scope is limited to that line we need to rewrite the instructions again to get the effect for another element

>[!Note]:
>* It is best suited only when we want to use that particular style at that particular element
___________________________________________________________________________________________________________________________
* **Embedd:**
```
<style type="text/CSS">

<style>
```
CASE -1: If style eleement is places inside head element than the code owuld be loaded to browser memeoyr and it would be used at the later stage as per our requirement
```
```
CASE -2: Inside the body
If we do so, then at the time of rendering elements, style effect would be applied by the browser

CASE -3: OUtside the HTML element
In this case also, same as case -2  but some time it would behave abnormally in somw scenarios

### Why MIME type should be given?
Ans: to tell the browser how to render a page
### Why should we tell to browser?
Ans: because we would have '{}' in our code. In general world,:
'{}' indicates:
- json file
- java code
- css styling


## Media type in CSS:

**QS. What is mediatype for style?**
Ans: 
It configures your styles for various devices and viewport.
We can set styles fo screen, print and speech.
```
<style type="text/CSS" media="all/screen/print/speech..">
</style>
```
Here-
screen: to see the effects on the screen.
print: to see the effect to take pictures

___________________________________________________________________________________________________________________________
* **External:**
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
  >[!Note]:
  > ticket-effects.css is linked with the index.html file using
  > ```
  > <link rel="stylesheet" href="path_to_CSS_file">
  > ```

**QS: What is minification?:**
Ans:
- Minification is the process of compressing CSS.
- It is always recommended to minify and use the CSS file for production.
- CSS original files will occupy more space, we have to use them for development but not for production

>[!Note]
>  **Priority Order:**
> 1. Inline
> 2. Embed
> 3. External
> 4. 👉 If new properties are defined in external, embed, inline, all will be applied

```
<style type="text/CSS>
    h1{
           color: blue;
           text-align: center;
    }
</style>
<link rel="stylesheet" href="path to external CSS"></link>
<h1 style="color: red;">Welcome to HTML</h1>
```
Here, **inline>>embed>>external**

___________________________________________________________________________________________________________________

## Selectors
It refers to the process of selecting an element in a web page.

**CSS selectors are classified into various categories:**
* Primary selectors.
* Rational selectors.
___
* Dynamic Pseudo classes.
* Structural Pseudo classes.
* ELement Pseudo classes.
* Validation State Pseudo classes.
___
* Attribute selectors.
* Universal selectors.
* Root selectors.
* Behavioural selectors.
___
##### Primary Selector:
1. ID selectors
   -ID refers to identifying an element with unique names
   - ```
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
     > * jfi
     > * fda

2. Class selectors
- If we want to apply multiple effects for an element then we go for class selector
- ```
  <elementName class="classname1 classname2 classname3 ..."
              data goes here
  </element>
  ```
3. Type selectors.
   - We target the element directly by referring to the token(tokens also known as tags)
   - ```
     h1{
        color:red;
     }
     ```

     ```
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
```
.text, #styling, h1{
   color: blue;
   text-align: center;
}
   <h1>HTML</h1>
   <h2 id="styling">CSS</h2>
   <h3 class="text">JS</h3>
 ```
___________
##### Rational Selector:
👉 We can select elements using parent and child hierarchy.

👉 We can also select elements using siblings.

- parent child -----------------all child elements in specific parents
- parent>child -----------------only direct child elements in specific parent
- ElementA + ElementB ----------adjacent selector[siblings]
- ELementA ~ ElementB-----------generic siblings

**Attribute Selector:**

elementname[attributename]{

}
elementname[attributename="value"]{

}

>[!Note]
> **Meta Character Binding:**

> **Condition ========================== Purpose**

> [attribute="val"] ================= Equal specifies that it should be exact match.

> [attribute^="val"] ================ It refers to the value starting with specified.

> [attribute$="val"] ================ It refers to the value ending with specified.

> [attribute*="val"] ================ Matches the terms at any location(same as % in SQL).

> [attribute|="val"] ================ Name starts with specified and is separated with "-".

> [attribute~="val"] ================ Name starts with specified term and not binded with other words.

Ex:
```html
example for attribute selector
```

#### Dynamic Pseudo Class Selector:
- Dynamic indicates that the effect can change according to state and situation.
- Pseudo means false representation.
- Class refers to Program template in computer programming, it contains predefined logic and data, which you can implement and customize according to the requirements.

- Selectors: =======Description:
- * :link =====Specifies effect for Hyperlink[anchor in default state]
  * :visited ==It defines effect for visited links[andchor in visited state]
  * :target ===It defines effect for the target element[used normally in intradocument(not scrollable)] {element is specified hyperlink}
  * :hover ====It defines effects when mouse pointer is over[mouseover]
  * :active === It defines effects when link is in active state[mousedown]

🌟class can transform element appearance, transformation time can be controlled by using "CSS attribute called **transition**".

#### Validation State Pseudo Classes:
- Selector ===========Description
- * :valid =========== It defines effects for element if tit is valid against the validation defined.
  * - Validation can be verified using:
  * - Minlength
    - Maxlength
    - Required
    - Pattern
    - Email
    - Url etc...
  * :invlid ========== It defines effects for an element when it is invalid.
  * :required ======== It defines effects for element when it is verified with requirement.
  * :optional ======== If it is not defined with required validation then it is treated as optional
 

#### ELement State Pseudo Classes:
- Selector ===========Description
- * enabled ==== It defines effects when the element is enabled.
  * disabled === It defines effects when the element is disabled.
  * read-only === It defines effects when the element is set to read-only.
  * checked === It defines effects when the element is checked.
  * focus ==== It defines effects when element is focused.

#### Structural Pseudo Classes:
>[!Note]
> * We can target our effects based on the position of the element in parent and child hierarchy.
- Selector ===========Description
- * :first-child ===  It defines effects only for first child element.
  * :last-child ==== It defines effects only for last child element
  * :nth-child ===== It defines effects only to specific child element that occurs at given level.
  * - Level number starts with 1.
    - Index number starts with 0.
    - We can also define the pre-set values like 'even & odd' to apply effects based on even and odd occureneces respectively.

  * nth-of-type(3|3n|3n+1) :: select elements from top nth occurance.
  * nth-last-of-type(3|3n|3n+1) :: select elements from bottom nth occurrence.


#### Behavioural and Occurance class*:
