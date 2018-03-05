from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
import os

app = Flask(__name__)

MONGODB_URI = os.environ.get('MONGODB_URI')
MONGO_DB_NAME = os.environ.get('MONGO_DB_NAME')
MONGO_COLLECTION_NAME = os.environ.get('MONGO_COLLECTION_NAME')

FIELDS = {'ID': True, 'Name': True, 'Date': True, 'Time': True,'Status': True, 'Latitude': True, 'Longitude': True,'MaximumWind':True,'CAT4':True,'L':True, '_id':False}

@app.route("/")
def get_home_page():
    return render_template('hurricanes.html')

@app.route("/data")
def get_data():
    with MongoClient(MONGODB_URI) as conn:
        collection = conn[MONGO_DB_NAME][MONGO_COLLECTION_NAME]
        dashboards = collection.find(projection=FIELDS)
        return json.dumps(list(dashboards))


if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))