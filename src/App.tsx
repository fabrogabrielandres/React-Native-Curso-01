import React from "react";
import { ObjetosLiterales } from "./Typescript/ObjetosLiterales";
import { TiposBasicos } from "./Typescript/TiposBasicos";

export const App = () => {
  return (
    <div className="mt-2">
      <h1>intro Ts-React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      <ObjetosLiterales/>
    </div>
  );
};

export default App;
