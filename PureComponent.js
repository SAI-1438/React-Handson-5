import React, {useMemo,useState} from 'react'

const PureComponent = () => {
    const [count,setCount]=useState(0);
    const counter=useMemo(()=>count,[count])
    const handleclick=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>Pure-Component</h1>
        Pure-Component which does not rerender by using "useMemo"
        <h2> {counter}</h2>
        <button onClick={handleclick}>Click here</button>
    </div>
  )
}

export default PureComponent