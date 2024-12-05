# Bootstrap 
linking javascript jquery wehere we want to use complete bootstrap:
```html
    <script src="/node_modules/jquery/dist/jquery.js"></script>
    <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
```
## Bootstrap Components:
1. ALert
2. Badges
3. Cards
4. Pagination
5. Carousel

_____
1. Alert -
**Classes:**
* alert
* alert-{contextual}
* alert-dismissable
* alert-heading
* alert-link


## jquery attributes:
Bootstrap components use jQuery attributes to configure and handle functionality.
Bootstrap5 version defines the attributes using "data-bs-{}".
Bootstrap Upto4 version defines the attributes using "data--{}".

Bootstrap jquery attributes are of various types:
* data-bs-target
* data-bs-toggle
* data-bs-dismiss
* data-bs-slide
* data-bs-ride, etc...
>[!Note]-
> To close anu component in bootstrap you can attach the attribute called "data-bs-dismiss" to any clickable element like[button, links]
> ```<button class='btn btn-close' data-bs-dismiss='component-name'>
> eg: <button class='btn btn-close' data-bs-dismiss='alert'>
> ```

3. Cards: A card comprises of the three sections:
   * Cardheader
   * CardBody
   * CardFooter
   >[!Note]
   > we can present our content in cards, which are displayed in page with flexible rows or column layout.
   
   > **Classes**:
   > * .card
   > * .card-header
   > * .card-body
   > * .card-footer
   > * .card-title
   > * .card-subtitle
   > * .card-img-top

4. Pagination:
   > **Classes:**
   > * pagination
   > * page-item
   > * page-link
   > * page-text
   > * active
   > * disabled

5. Carousel:
**Syntax:**
```html
<div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="" alt="">
            </div>
            ...add multiple items ...
        </div>
    </div>
```
* Carousel items cannot display any item directly.
* Carousel needs any one item set to active.[only one item must be active]
* ` <div class="carousel-item active"> `
* >[!Note]
  > Carousel cannot start animation directly, we need to define the attribute `data-bs-ride` for carousel.
  > `<div class="carousel" data-bs-ride="carousel">`
  > Carousel doesn't have any default transition, we have to set the transition using classes.
  > * slide
  > * carousel-fade

### Adding carousel indicators and making them work:
- We can add controls for carousel so that user can navigate to previous and next slide.
- **Classes:**
- * carousel-control-prev
  * carousel-control-prev-icon
  * carousel-control-next
  * carousel-control-next-icon

- To make the buttons dark:
- `<div class="carousel" data-bs-ride="carousel" data-bs-theme="dark">`
- Carousel controls are normally buttons:
- **Syntax:**
```html
        <button class="carousel-control-prev">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <button class="carousel-control-next">
            <span class="carousel-control-next-icon"></span>
        </button>
```

- Carousel controls needs jQuery attributes to handle navigation
- `data-bs-slide="prev"`
- `data-bs-slide="next"`
- `data-bs-target="#carousel_id"`

- it is also possible to control the transition time of each carousel using the attribute: `data-bs-interval="milliseconds"`
- **Syntax:**
- ```html
     div class="carousel-item" data-bs-interval="3000"
  ```

_______________________________________________________________________________________
Dropdown:
- It is good for dynamic list.
- If we want static list with navigation and with complex data like images, icons etc then you can use bootstrap dropdown.

  
**Classes:**
* .dropdown
* .dropup
* .dropend
* .dropstart
* .dropdown-toggle
* .dropdown-item
* .dropdown-divider
_______________________________________________________________________________________
Nav With Tabs():

**Classes:**
* .nav
* .nav-menu
* .nav-item
* .nav-link
* .nav-tabs
* .nav-pills
* .nav-content
* .nav-pane

Syntax:
```html
