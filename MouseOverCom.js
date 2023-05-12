import React from 'react'
import HocCom from './HocCom'

const MouseOverCom = (props) => {
  return (
    <div>MouseOverCounter using HOC
        <h1>{props.value}</h1>
            <button onMouseOver={props.submit}>Over It</button>
    </div>
  )
}

export default HocCom(MouseOverCom)