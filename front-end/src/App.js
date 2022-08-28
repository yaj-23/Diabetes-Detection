import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([{}])
  
  // Fetching the data from the Flask Backend
  useEffect(() => {
    fetch("/metrics").then(
      res => res.text()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  })
  
  return (
   <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading ...</p>
      ):(
        data.members.map((member,i) => (
          {member}
        ))
      )} 
     
   </div>
  );
}

export default App;
