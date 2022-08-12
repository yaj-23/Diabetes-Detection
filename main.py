import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

"""
Install panads for Data Frames. This model uses Decision Tree Classifiers.
Use Train_test_split for splitting data for training and splitting purposes
Accuracy Score is used to compare the testing and predictions and provide accuracy reading 
"""

#Import the data file
df = pd.read_csv('new.csv')

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

#use following two lines for making predictions with a specific data value
#predictions = model.predict([[0,49,4.7,36,2.6,4.2,0.9,2.4,4,0.5,23.0]])
#predictions

#make predctions based on the test values
predictions = model.predict(X_test)

#Comparte the tests and predictions and output the accuracy
score = accuracy_score(Y_test, predictions)
print("The algorithim is: " + str(score*100) + "% accurate!")