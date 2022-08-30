from email.policy import strict
from operator import truediv
from urllib import request
from flask import Flask
app=Flask(__name__)

@app.route("/metrics")
def metrics():
    return{"gender": 1,"age": 45,"urea": 4.8,"cr": 82,"hba1c": 7.2,"chol": 4.7,"tg": 1.8,"hdl": 0.8,"ldl": 3.1,"vldl": 12.7,"bmi": 31.2}

@app.route("/input_metrics", methods=["POST"], strict_slashes=False)
def input_metrics():
    gender = request.json('gender')
    age = request.json('age')
    urea = request.json('urea')
    cr = request.json('cr')
    hba1c = request.json('hba1c')
    chol = request.json('chol')
    tg = request.json('tg')
    hdl = request.json('hdl')
    ldl = request.json('ldl')
    vldl = request.json('vldl')
    bmi = request.json('bmi')
    
    print(gender, age, urea, cr, hba1c, chol, tg, hdl,ldl, vldl, bmi)

if __name__ == "__main__":
    app.run(debug=True)