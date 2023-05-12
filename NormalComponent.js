import React, {useState} from 'react'

const NormalComponent = () => {
    const [count,setCount]=useState(0)
    const handleclick=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>Normal-Component</h1>
        Normal-Component which goes on "rerendering"
        <h2> {count}</h2>
        <button onClick={handleclick}>Click here</button>
    </div>
  )
}

export default NormalComponent