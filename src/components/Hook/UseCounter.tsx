import { useState } from "react";


export const UseCounter = (inicio:number=3) => {
  const [valor, setvalor] = useState(inicio);
  const acumular = (numero: number) => {
    setvalor(valor + numero);
  };

  return {
    acumular,
    valor,
  };
};
