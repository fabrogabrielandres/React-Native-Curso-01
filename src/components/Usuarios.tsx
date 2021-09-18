import React, { useEffect, useRef, useState } from "react";
import { reqRes } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [usuarios, setusuarios] = useState<Usuario[]>([]);
  const pag = useRef(1);

  useEffect(() => {
    pagination();
  }, []);

  const pagination = async () => {
    let resp = await reqRes.get<ReqResListado>(`/users?page=${pag.current}`);
    setusuarios(resp.data.data);
    pag.current = pag.current + 1;
  };
  const renderUsuarios = (usuario: Usuario) => {
    let { first_name, last_name, avatar, id } = usuario;
    return (
      <tr key={id.toString()}>
        <th scope="col">
          <img
            src={avatar}
            className="rounded-circle"
            alt="imagen"
            style={{ width: 25 }}
          />
        </th>
        <th scope="col">{first_name}</th>
        <th scope="col">{last_name}</th>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuario:</h3>
      <table className="table">
        <thead>{usuarios.map(renderUsuarios)}</thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={pagination}>
        Siguiente
      </button>
    </>
  );
};
