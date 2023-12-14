import React, { useContext } from 'react'
import { store } from '../App'

function Component1() {
  const [data,setData] = useContext(store)
  return (

    <div>
        <h2>Count : {data.length}</h2>
     </div>
  )
}

export default Component1