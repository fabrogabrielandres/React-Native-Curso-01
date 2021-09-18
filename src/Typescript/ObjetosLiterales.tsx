import * as React from "react";

interface Persona {
  nombre: string,
  apellido: string,
  edad: number,
  direccion:Direccion,
}

interface Direccion{
    pais:string,
    num:number,
}

export const ObjetosLiterales = () => {
  let persona: Persona = {
    nombre: "gabi",
    apellido: "fabro",
    edad: 34,
    direccion:{
        pais:"argentina",
        num:83
    }
  };
  return (
    <div>
      <h3>Objetos literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </div>
  );
};
