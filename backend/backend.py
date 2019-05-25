import json
import sqlite3
from sqlite3 import Error
from flask import Flask 
from flask_cors import CORS
from flask import g
from inspo import *
app = Flask(__name__)
CORS(app)

DATABASE = 'lookbook.db'

def query_db(query, args=(), one=False):
  conn = sqlite3.connect(DATABASE)
  curr = conn.execute(query)
  rv = curr.fetchall()
  curr.close()
  return (rv[0] if rv else None) if one else rv

@app.route("/")
def root():
  return "Inspo API Working"

@app.route("/favorites")
def get_favorites():
  result = []
  for row in query_db('select * from favorite'):
    (_id, url) = row
    obj_data = {'id': _id, 'url': url}
    result.append(obj_data)

  return json.dumps(result)


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

