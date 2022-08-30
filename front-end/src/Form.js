import { useState } from 'react';
import APIService from './APIService'

const Form = (props) => {
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [urea, setUrea] = useState('')
    const [cr, setCr] = useState('')
    const [hba1c, setHba1c] = useState('')
    const [chol, setChol] = useState('')
    const [tg, setTg] = useState('')
    const [hdl, setHdl] = useState('')
    const [ldl, setLdl] = useState('')
    const [vldl, setVldl] = useState('')
    const [bmi, setBmi] = useState('')

    const insertArticle = () =>{
      APIService.InsertArticle({gender,age,urea, cr, hba1c, chol, tg, hdl, ldl, vldl, bmi})
      .then((response) => props.insertedArticle(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertArticle()
      setGender('')
      setAge('')
      setUrea('')
      setCr('')
      setHba1c('')
      setChol('')
      setTg('')
      setHdl('')
      setLdl('')
      setVldl('')
      setBmi('')
    }

  return (
       <div>
            <form onSubmit={handleSubmit}>
                <input value={gender} onChange={(e) => setGender(e.target.value)}/>
                <input value={age} onChange={(e) => setAge(e.target.value)}/>
                <input value={urea} onChange={(e) => setUrea(e.target.value)}/>
                <input value={cr} onChange={(e) => setCr(e.target.value)}/>
                <input value={hba1c} onChange={(e) => setHba1c(e.target.value)}/>
                <input value={chol} onChange={(e) => setChol(e.target.value)}/>
                <input value={tg} onChange={(e) => setTg(e.target.value)}/>
                <input value={hdl} onChange={(e) => setHdl(e.target.value)}/>
                <input value={ldl} onChange={(e) => setLdl(e.target.value)}/>
                <input value={vldl} onChange={(e) => setVldl(e.target.value)}/>
                <input value={bmi} onChange={(e) => setBmi(e.target.value)}/>
                <button>DO IT</button>
            </form>
       </div>
  )}

export default Form;