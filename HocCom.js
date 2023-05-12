import React,{useState} from 'react'

const HocCom = (ValueCom) => {
    function Hoc(){
        const [value,setValue] =useState(0);
        const handleSubmit=()=>{
            setValue(value+1);
        }
        return (
            <div>
                <h1>HOC-Component---</h1>
                <ValueCom value={value} submit={handleSubmit}/>
            </div>
          )
    }
    return Hoc
}

export default HocCom;