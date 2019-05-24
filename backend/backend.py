import json
import sqlite3
from sqlite3 import Error
from flask import Flask 
from flask_cors import CORS
from flask import g
from inspo import *
app = Flask(__name__)
CORS(app)

@app.route("/")
def root():
  return "Inspo API Working"

@app.route("/top")
def get_top():
  top_fits = get_top_fits()
  result = []
  for i in range(len(top_fits)):
    img = {'id': i, 'url': top_fits[i]}
    result.append(img)
  
  result = json.dumps(result)
  return result

@app.route("/hot")
def get_hot():
  hot_fits = get_hot_fits()
  result = []
  for i in range(len(hot_fits)):
    img = {'id': i, 'url': hot_fits[i]}
    result.append(img)
  result = json.dumps(result)
  return result

