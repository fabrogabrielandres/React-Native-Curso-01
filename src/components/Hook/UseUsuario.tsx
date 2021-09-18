import { useEffect, useRef, useState } from "react";
import { reqRes } from "../../api/reqRes";
import { ReqResListado, Usuario } from "../../interfaces/reqRes";

export const UseUsuario = () => {
  const [usuarios, setusuarios] = useState<Usuario[]>([]);
  const pag = useRef(1);

  const pagination = async () => {
    let resp = await reqRes.get<ReqResListado>(
      `/users?page=${pag.current + 1}`
    );
    setusuarios(resp.data.data);
  };

  useEffect(() => {
    pagination();
  }, []);

  // const pasarDePagina = (modifiPage: number) => {
  //   pagination(modifiPage);
  // };

  return {
    pagination,
    usuarios,
  };
};
