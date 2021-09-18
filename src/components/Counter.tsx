import React, {  useState } from 'react'

export const Counter = () => {

    const [contador, setcontador] = useState<number>(10)
    

    return (
        <div>
            <h1 className="text-center">Contador <span> {contador} </span></h1>
            <button className="btn btn-primary mx-5" onClick={()=>setcontador(contador+1)}>+1</button>
            <button className="btn btn-secondary mx-5" onClick={()=>setcontador(3)}>Reset</button>
            <button className="btn btn-primary mx-5" onClick={()=>setcontador(contador-1)}>-1</button>
    
        </div>
    )
}
