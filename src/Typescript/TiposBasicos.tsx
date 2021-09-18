import React from 'react'

export const TiposBasicos = () => {
    
    const nombre:string = "fernando"
    const edad:number = 123
    const isActive:boolean = true
    const poderes:string[]=["volar", "saltar","hablar"]

    return (
        <>
          <h3>tipos basicos</h3>
          {nombre} , {edad} , {poderes.join("*-*")}
          {poderes.length}  
        </>
    )
}
