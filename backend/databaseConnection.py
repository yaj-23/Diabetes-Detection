import pymongo
import json 
from posixpath import split
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://yajurva23:FUKbZu7BGDvnTfGk@cluster0.zvcmwfb.mongodb.net/metrics?retryWrites=true&w=majority")

db = cluster.get_database('metrics')
records = db.metrics

#print(records.count_documents({}))
entity = list(records.find())
top_entity = entity[0]

gender = top_entity.get('gender')
age = top_entity.get('age')
urea = top_entity.get('urea')
cr = top_entity.get('crea')
hba1c = top_entity.get('hba1c')
chol = top_entity.get('chol')
tg = top_entity.get('tg')
hdl = top_entity.get('hdl')
ldl = top_entity.get('ldl')
vldl = top_entity.get('vldl')
bmi = top_entity.get('bmi')

#print(gender, age, urea, cr, hba1c, chol, tg, hdl, ldl, vldl, bmi)
#print(y.get("gender"))
#print(list(records.find()))

dataset = "new.csv"
df = pd.read_csv(dataset)

#Start clean up, drop the CLASS Column from copy of Data Frame - or the column which states whether patient has diabetes or not
X = df.drop(columns=['CLASS'])

#Get the CLASS Column used for comparing our training
Y = df['CLASS']

#Split the data into 8:2 ratio for Train:Test
X_train, X_test, Y_train, Y_test = train_test_split(X,Y,test_size=0.2)

#Call the model
model = DecisionTreeClassifier()

#fit the model
model.fit(X_train.values, Y_train)

predictions = model.predict([[(gender), (age), (urea), (cr), (hba1c), (chol), (tg), (hdl), (ldl), (vldl), (bmi)]])

newCollection = db["patientResult"]

if (predictions == 1):
    print("Patient is diabetic")
    newCollection.insert_one({"Patient":"1"})
else:
    print("Patient is non diabetic")
    newCollection.insert_one({"Patient":"0"})


