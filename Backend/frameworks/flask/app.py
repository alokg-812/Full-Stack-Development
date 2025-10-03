from flask import Flask

app = Flask(__name__)

@app.route("/")    # This means we are saying hey flask, please turn the following function into a route that can be served up be the server of the browser.
def index():
    # return "Hello World!"
    return '<!DOCTYPE html><html lang="en"><head><title>Flask</title></head><body>Hello Body</body></html>'
