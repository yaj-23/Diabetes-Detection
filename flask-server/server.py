from flask import Flask

app = Flask(__name__)

#Metrics API Route
@app.route("/metrics")
def metrics():
    #return {"001": ["gender"]}
    return {
    "gender": "1",
    "age": "45",
    "urea": "4.8",
    "cr": "82",
    "hba1c": "7.2", 
    "chol": "4.7",
    "tg": "1.8", 
    "hdl": "0.8",
    "ldl": "3.1",
    "vldl": "12.7",
    "bmi": "31.2"
}
if __name__ == "__main__":
    app.run(debug=True)