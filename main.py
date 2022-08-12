import re
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
dataset = "new.csv"
df = pd.read_csv(dataset)

#Start clean up, drop the CLASS Column from copy of Data Frame - or the column which states whether patient has diabetes or not
X = df.drop(columns=['CLASS'])

#Get the CLASS Column used for comparing our training
Y = df['CLASS']

#Split the data into 8:2 ratio for Train:Test
X_train, X_test, Y_train, Y_test = train_test_split(X,Y,test_size=0.2)

mode = int(input("Enter 0 if you want to enter your own data\nEnter 1 if you want to check model accuracy: "))

#Call the model
model = DecisionTreeClassifier()

#fit the model
model.fit(X_train.values, Y_train)

if (mode == 0):
    print("Using dummy value:")
    #use following two lines for making predictions with a specific data value
    #predictions = model.predict([[0,49,4.7,36,2.6,4.2,0.9,2.4,4,0.5,23.0]]) #Dummy non-diabetic value
    predictions = model.predict([[1,45,4.8,82,7.2,4.7,1.8,0.8,3.1,12.7,31.2]]) # Dummy diabetic value
    # gender, age, urea, cr, hba1c, chol, tg, hdl, ldl, vldl, bmi = list(map(float , input("Enter the gender, age, blood urea nitrogen, creatinine, hemoglobin, cholesterol, triglycerides, high-density liprotein, low-density liporotein, very-low-desnity liprotien & BMI: ")).split())
    # predictions = model.predict([[int(gender), int(age), int(urea), int(cr), int(hba1c), int(chol), int(tg), int(hdl), int(ldl), int(vldl), int(bmi)]])
    if (predictions == 1):
        print("Patient is diabetic")
    else:
        print("Patient is non diabetic")
elif (mode == 1 ):
    print("Determining accuracy of model - taking dataset from: " + dataset )
    #make predctions based on the test values
    predictions = model.predict(X_test)
    #Comparte the tests and predictions and output the accuracy
    score = accuracy_score(Y_test, predictions)
    print("The algorithim is: " + str(score*100) + "% accurate!")

