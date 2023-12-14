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
    id: 6,
    name:'kakinada'
  },


]
function SearchBar() {
  
 
  const [data, setData] = useState('')

  const changeHandler = e => {
    setData(e.target.value)
  }
  const submitHandler = e => {
        e.preventDefault()
        console.log(data)
  
        
  }
 
  
  return (
    <div>
      <center>
        <h1>Introduction</h1>

        <form onSubmit={submitHandler}>
          <input type='text' value={data} onChange={changeHandler} />
         <input type='submit' value='add'/>
        </form>

        {cities.filter(eachCity=>eachCity.name.toLowerCase().includes(data)).map(eachCity=>(
        <div key={eachCity.id} onClick={()=>setData(eachCity.name)} >
       {eachCity.name}
        </div>
          ))}

      

      </center>
    </div>
  )
}

export default SearchBar;
