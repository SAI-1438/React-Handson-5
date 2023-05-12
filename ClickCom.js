import React from 'react'
import HocCom from './HocCom'

const ClickCom = (props) => {
  return (
    <div>ClickCounter using HOC
        <h1>{props.value}</h1>
            <button onClick={props.submit}>Click It</button>
    </div>
  )
}

export default HocCom(ClickCom)