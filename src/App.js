import React, { useEffect, useRef } from 'react'




function App() {

  const data = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data.current.value)
  }

  useEffect (() => {
    data.current.focus()
  },[])
  
  return (

    <div> 
      <center>
         <form onSubmit={submitHandler}>
        <input type='text' ref={data} placeholder='enter text'/>
        <input type='submit'/> 
        </form>
        
      </center>
    </div>
  )
}

export default App


/*
 <store.Provider value={[data,setData]}>
          <h1>Context API</h1>
          <Component1 />
          <Component2 />
          

        </store.Provider>

*/