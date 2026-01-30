from flask import Flask,request, render_template
from flask_sqlalchemy import SQLAlchemy
import bcrypt

app = Flask(__name__)


@app.route('/')
def index():
  return 'Hi'

@app.route('/register', methods=['GET','POST'])
def register():
  if request.method=='POST':
    #handling request
    pass
  return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
  if request.method=='POST':
    pass
  return render_template('login.html')


if __name__ == '__main__':  
  app.run(debug=True)