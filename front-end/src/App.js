import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'

function App() {
  const [articles, setArticles] = useState([]);

  // const [data, setData] = useState({
  //   gender : '',
  //   age: '',
  //   urea: '',
  //   cr: '',
  //   hba1c:'',
  //   chol:'',
  //   tg: '',
  //   hdl: '',
  //   ldl: '',
  //   vldl: '',
  //   bmi: '',
  // })
  

  // useEffect(async() => {
  //   // Using fetch to fetch the api from 
  //   // flask server it will be redirected to proxy
    
  //   await fetch("/metrics").then((res) =>
  //       res.json().then((data) => {
  //           // Setting a data from api
  //           setData({
  //             gender : data.gender,
  //             age: data.age,
  //             urea: data.urea,
  //             cr: data.cr,
  //             hba1c: data.hba1c,
  //             chol: data.chol,
  //             tg: data.tg,
  //             hdl: data.hdl,
  //             ldl: data.ldl,
  //             vldl: data.vldl,
  //             bmi: data.bmi,
  //           });
  //       })
  //   );
  // })
  // update the existing article list
  const insertedArticle = (article) =>{
    const new_articles = [...articles,article]
    setArticles(new_articles)
  }


  return (
   <div>
      {/* <p>Gender: {data.gender}</p>
      <p>Age: {data.age}</p>
      <p>Urea: {data.urea}</p>
      <p>CR: {data.cr}</p>
      <p>Hba1c: {data.hba1c}</p>
      <p>Chol: {data.chol}</p>
      <p>Tg: {data.tg}</p>
      <p>Hdl: {data.hdl}</p>
      <p>Ldl: {data.ldl}</p>
      <p>Vldl: {data.vldl}</p>
      <p>Bmi: {data.bmi}</p> */}
      <Form insertedArticle={insertedArticle} />

   </div>
  );
}

export default App;
