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
   >[!Note]:
   > we can present our content in cards, which are displayed in page with flexible rows or column layout.
   > **Classes**:
   > * .card
   > * .card-header
   > * .card-body
   > * .card-footer
   > * .card-title
   > * .card-subtitle
   > * .card-img-top
