import React from 'react'

export const Funciones = () => {

    const sumarArrow =  (a:number , b:number):number => {
        return a+b
    } 
    function sumar(a:number,b:number):number {
        return a+b        
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>{`el resultado de sumar con arrofunc ${sumarArrow(2,6)} y el resultado de sumar con 
            function comun es ${sumar(4,3)}`}</span>            
        </>
    )
}
