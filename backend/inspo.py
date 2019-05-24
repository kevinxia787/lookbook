import praw
import os
from dotenv import load_dotenv
load_dotenv()

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

reddit = praw.Reddit(client_id=CLIENT_ID, 
                     client_secret=CLIENT_SECRET,
                     user_agent='test')
streetwear = reddit.subreddit('streetwear')

def get_hot_fits():
  fitpics = []
  for i in streetwear.search('WDYWT', sort='hot', limit=250):
    post_title = i.title
    if ('[WDYWT]' in post_title):
      if (i.url[-4:] == '.jpg' or i.url[-4:] == '.png'):
        fitpics.append(i.url)
      
  return fitpics

def get_top_fits():
  fitpics = []
  for i in streetwear.search('WDYWT', sort='top', limit=250):
    post_title = i.title 
    if ('[WDYWT]' in post_title):
      fitpics.append(i.url)
      
  return fitpics

