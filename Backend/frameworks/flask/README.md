### Importing terms:
- **request** -> a special object that's going to give me access to all of the HTTP parameters, the user input in the HTTP request that's causing this code to be executed



1. **@app.route("/")** -> This means we are saying hey flask, please turn the following function into a route that can be served up be the server of the browser.
2. **render_template** -> Using this, Flask knows that we are trying to render any template and that template would definitely be found in the `template` folder.
3. **4 lines to check parameter passed or not!**: we can use the function `get`
  ``name = request.args.get("name", "xyz")``