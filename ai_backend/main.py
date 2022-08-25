import json 
from posixpath import split
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
    user_mode = input("Would you like to test using dummy values? Enter Y for yes, N for no: ")
    if (user_mode == "Y" or user_mode == "y"):

        print("Using dummy value:")
        diabetic_choice = input("Press 1 for diabetic patient input, 2 for non-diabetic patient: ")
        if (diabetic_choice == "1"):
            #predictions = model.predict([[1,45,4.8,82,7.2,4.7,1.8,0.8,3.1,12.7,31.2]]) # Dummy diabetic value
            #print("Metrics: 1,45,4.8,82,7.2,4.7,1.8,0.8,3.1,12.7,31.2")
            with open('test_diabetic.json', 'r') as openfile:
                json_object = json.load(openfile)
            gender = json_object['gender']
            age = json_object['age']
            urea = json_object['urea']
            cr = json_object['cr']
            hba1c = json_object['hba1c']
            chol = json_object['chol']
            tg = json_object['tg']
            hdl = json_object['hdl']
            ldl = json_object['ldl']
            vldl = json_object['vldl']
            bmi = json_object['bmi']
            print("Gender: "+ str(gender) + "\tAge: " + str(age) + "\tUrea: " + str(urea) + "\tCR: " + str(cr) + "\tHba1C: " + str(hba1c) + "\tChol: " + str(chol) + "\tTg: " + str(tg) + "\tHDL: " + str(hdl) + "\tLDL: " + str(ldl) + "\tVldl: " + str(vldl) + "\tBmi: " + str(bmi))

        elif(diabetic_choice == "2"):
            #predictions = model.predict([[0,49,4.7,36,2.6,4.2,0.9,2.4,4,0.5,23.0]]) #Dummy non-diabetic value
            #print("Metrics: 0,49,4.7,36,2.6,4.2,0.9,2.4,4,0.5,23.0")
            with open('test_nondiabetic.json', 'r') as openfile:
                json_object = json.load(openfile)
            gender = json_object['gender']
            age = json_object['age']
            urea = json_object['urea']
            cr = json_object['cr']
            hba1c = json_object['hba1c']
            chol = json_object['chol']
            tg = json_object['tg']
            hdl = json_object['hdl']
            ldl = json_object['ldl']
            vldl = json_object['vldl']
            bmi = json_object['bmi']
            print("Gender: "+ str(gender) + "\tAge: " + str(age) + "\tUrea: " + str(urea) + "\tCR: " + str(cr) + "\tHba1C: " + str(hba1c) + "\tChol: " + str(chol) + "\tTg: " + str(tg) + "\tHDL: " + str(hdl) + "\tLDL: " + str(ldl) + "\tVldl: " + str(vldl) + "\tBmi: " + str(bmi))

    elif (user_mode == "N" or user_mode == "n"):
        gender, age, urea, cr, hba1c, chol, tg, hdl, ldl, vldl, bmi= input("Enter the gender, age, blood urea nitrogen, creatinine, hemoglobin, cholesterol, triglycerides, high-density liprotein, low-density liporotein, very-low-desnity liprotien & BMI:").split(' ')
    
    predictions = model.predict([[(gender), (age), (urea), (cr), (hba1c), (chol), (tg), (hdl), (ldl), (vldl), (bmi)]])

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

