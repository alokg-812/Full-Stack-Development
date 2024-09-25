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
  
Structure:

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
