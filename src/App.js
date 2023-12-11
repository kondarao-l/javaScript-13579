
import './App.css';
import { useState } from 'react'


const cities = [
  {
    id:1,
    name:'Hyd'
  },
  {
    id:2 ,
    name:'Vizag'
  },
  {
    id:3 ,
    name:'tirupati'
  },
  {
    id: 4,
    name:'guntur'
  },
  {
    id: 5,
    name:'ongole'
  }
]
function App() {
  
 
  const [data, setData] = useState('')
  const changeHandler = e => {
    setData(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault()
    setData(data)
    //console.log(data)
  }
  const buttonHnadler = (e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <center>
        <h1>Introduction</h1>

        <form onSubmit={submitHandler}>
          <input type='text' value={data}  onChange={changeHandler} />
         <input type='submit'/>
        </form>

        {cities.filter(eachCity=>eachCity.name.toLowerCase().includes(data)).map(eachCity=>(
        <div key={eachCity.id} onClick={buttonHnadler}>
       {eachCity.name}
        </div>
          ))}

      

      </center>
    </div>
  )
}

export default App;
