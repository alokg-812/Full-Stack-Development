from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    if "name" in request.args:
        name = request.args["name"]
    else:
        name = "alok"
    return render_template("index.html", name=name) # this will only work when the user sends some data through the /?name="xyz"