from flask import Flask, render_template, request

app = Flask(__name__)

'''
@app.route("/")
def index():
    name = request.args.get("name", "alok")
    return render_template("index.html", name=name) # this will only work when the user sends some data through the /?name="xyz"
'''

@app.route("/greet")
def greet():
    name = request.args.get("name", "advik")
    return render_template("greet.html", name=name)