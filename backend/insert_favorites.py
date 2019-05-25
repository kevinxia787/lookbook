import sqlite3
from sqlite3 import Error
from inspo import *
from random import sample

def create_connection(db_file):
  try:
    conn = sqlite3.connect(db_file)
    return conn
  except Error as e:
    print(e)
  return None

def insert_favorite(conn, data):
  sql = ''' INSERT INTO favorite(_id, url) VALUES(?, ?) '''
  curr = conn.cursor()
  curr.execute(sql, data)
  return curr.lastrowid

def delete_all_rows(conn):
  sql = ''' DELETE FROM favorite '''
  curr = conn.cursor()
  curr.execute(sql)

def main():
  database = "lookbook.db"
  conn = create_connection(database)
  with conn:
    delete_all_rows(conn)

    fits = get_hot_fits()
    selected = sample(fits, 10)
    for i in range(0, len(selected)):
      curr_fav = (i, selected[i])
      insert_favorite(conn, curr_fav)



if __name__ == '__main__':
  main()



    


