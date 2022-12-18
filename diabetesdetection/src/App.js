import React, {useState, useEffect} from 'react';
import './App.css';
import  Axios from 'axios';


function App() {
  const url="http://localhost:4000/app/sendMetrics";
  const resultsUrl = "http:localhost:4000/app/patientResults";

  const [data, setData] = useState({
    gender:"",
    age:"",
    urea:"",
    crea:"",
    hba1c:"",
    chol:"",
    tg:"",
    hdl:"",
    ldl:"",
    vldl:"",
    bmi:"",
  })
  const [patientResults, setPatientResults] = useState([]);

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      gender:data.gender,
      age:data.age,
      urea:data.urea,
      crea:data.crea,
      hba1c:data.hba1c,
      chol:data.chol,
      tg:data.tg,
      hdl:data.hdl,
      ldl:data.ldl,
      vldl:data.vldl,
      bmi:data.bmi
    }).then(res=>{
      console.log(res.data)
    });
  }
  useEffect(() => {
    Axios.get("http://localhost:4000/app/patientResult")
      .then(res => setPatientResults(res.data))
      .catch(err => console.log(err));
  
    return () => {
      // Clean up function goes here
    };
  }, []);
  
  return (
    <>
    <h1>Values for Diabetes Detection</h1>
    <div className='InputFields'>
      <form onSubmit={(e)=> submit(e)} >
        <input onChange={(e)=> handle(e)} id="gender" value={data.gender} type="text" placeholder='Gender'></input>
        <input onChange={(e)=> handle(e)} id="age" value={data.age} type="text" placeholder='Age'></input>
        <input onChange={(e)=> handle(e)} id="urea" value={data.urea} type="text" placeholder='Blood Urea Nitrogen Level'></input>
        <input onChange={(e)=> handle(e)} id="crea" value={data.crea} type="text" placeholder='Creatinine'></input>
        <input onChange={(e)=> handle(e)} id="hba1c" value={data.hba1c} type="text" placeholder='Hemoglobin'></input>
        <input onChange={(e)=> handle(e)} id="chol" value={data.chol} type="text" placeholder='Cholesterol'></input>
        <input onChange={(e)=> handle(e)} id="tg" value={data.tg} type="text"placeholder='Triglycerides'></input>
        <input onChange={(e)=> handle(e)} id="hdl" value={data.hdl} type="text" placeholder='High-Density Lipoprotein'></input>
        <input onChange={(e)=> handle(e)} id="ldl" value={data.ldl} type="text" placeholder='Low-Density Lipoprotein'></input>
        <input onChange={(e)=> handle(e)} id="vldl" value={data.vldl} type="text" placeholder='Very-Low-Density Lipoprotein'></input>
        <input onChange={(e)=> handle(e)} id="bmi" value={data.bmi} type="text" placeholder='Body Mass Index'></input>
        <button>Submit</button>
      </form>
      
    </div>
    <div>
      {patientResults.map(result => (
        <div key={result.id}>
          <p>Patient is: {result.Patient}</p>
        </div>
      ))}
    </div>


    
    </>
  );
}

export default App;
