from flask import Flask,request, render_template
from flask_sqlalchemy import SQLAlchemy
import bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class User(db.Model):
  id=db.Column(db.Integer, primary_key=True)
  name=db.Column(db.String(100), nullable=False)
  email=db.Column(db.String(100), unique=True)
  password=db.Column(db.String(100))

  def __inti__(self,email,password,name):
    self.name=name
    self.email=email
    self.password=bcrypt.hash(password.encode('utf=8'), bcrypt.gensalt()).decode('utf-8')
  
  def check_password(self,password):
    return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))

with app.app_context():
  db.create_all()

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