import requests
import json
import random
import psycopg2
import re


def connect_to_db():
    return psycopg2.connect(
        database='countries',
        user='tom',
        password='\\\\',
        host='localhost',
        port='5432',
    )

def data_cleaner(data):
    data = re.sub(r"[']", '`', data)
    return data

connection = connect_to_db()
cursor = connection.cursor()

countries_api = requests.get('https://restcountries.com/v3.1/all')
data = countries_api.json()

query = 'INSERT INTO dailychallenge_countries (name, capital, flag, region, population)VALUES(%s, %s, %s, %s, %s)'

for country in range(10):
    index = random.randint(1,100)
    name = data[index]['name']['official']
    capital = data[index]['capital'][0]
    flag_code = data[index]['flag']
    region = data[index]['region']
    population = data[index]['population']
    cursor.execute(query, (name, capital, flag_code, region, population))

connection.commit()
cursor.close()
connection.close()

print('data succesfully added!')
    

