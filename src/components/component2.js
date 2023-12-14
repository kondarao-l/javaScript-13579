import React , {useContext, useState} from 'react'
import { store } from '../App'

function Component2() {
  const [data,setData] = useContext(store)
  const [names,setNames] = useState('')

  const submitHandler = (e) => {
  e.preventDefault()
  setData([...data,{name:names}])
  }

    return (
        <div>
           {data.map(city=>(
                <div>{city.name} </div>
            ))}

            <form onSubmit={submitHandler}>
                <input type='text' placeholder='Enter City' value={names} onChange={(e)=>setNames(e.target.value)}/>
                <input type='submit' value='add'/>
            </form>
           
                <button onClick={()=>setNames('')}>Clr</button>
        </div>
    )
}

export default Component2