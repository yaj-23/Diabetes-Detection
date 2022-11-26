import React, {useState} from 'react';
import './App.css';
//import  Axios from 'axios';


function App() {
  const url=""
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
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <>
    <h1>Values for Diabetes Detection</h1>
    <div className='InputFields'>
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
    </div>
    
    </>
  );
}

export default App;
