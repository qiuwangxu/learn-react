import React, { useState, useEffect } from 'react'

function Example () {
  const [count, setCount] = useState(0)
  useEffect (()=>{
    document.title = `you clicked ${count} times`
  })
  return (
    <div>
      <p> you clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>
        click me
      </button>
    </div>
  )
}