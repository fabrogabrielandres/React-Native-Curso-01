import { useEffect, useRef, useState } from "react";
import { reqRes } from "../../api/reqRes";
import { ReqResListado, Usuario } from "../../interfaces/reqRes";

export const UseUsuario = () => {
  const [usuarios, setusuarios] = useState<Usuario[]>([]);
  const pag = useRef(1);

  const pagination = async (modifiPage: number) => {
    let resp = await reqRes.get<ReqResListado>(`/users?page=${pag.current + modifiPage}`)
    pag.current=pag.current+modifiPage
    setusuarios(resp.data.data);
  };

  useEffect(() => {
    pagination(0);
  }, []);

  const pasarDePagina = (modifiPage: number) => {
    pagination(modifiPage)
  };

  return {
    pagination,
    usuarios,
    pasarDePagina,
    pag
  };
};
