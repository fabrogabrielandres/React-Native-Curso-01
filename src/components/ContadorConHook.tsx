import React from "react";
import { UseCounter } from './Hook/UseCounter';

export const ContadorConHook = () => {

  const { acumular,valor} = UseCounter()

  return (
    <>
      <h3>Contador Con UseCounter</h3>
      <button className="btn btn-secondary" onClick={() => acumular(1)}>
        +1
      </button>

      <h3>{`el resultado del acumulador es:${valor}`}</h3>
      <button className="btn btn-secondary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
