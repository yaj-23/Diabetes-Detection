import json
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

print(str(gender) + " " + str(age) + " " + str(urea) + " " + str(cr) + " " + str(hba1c) + " " + str(chol) + " " + str(tg) + " " + str(hdl) + " " + str(ldl) + " " + str(vldl) + " " + str(bmi))