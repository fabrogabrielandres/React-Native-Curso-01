import { Usuario } from "../interfaces/reqRes";
import { UseUsuario } from "./Hook/UseUsuario";

export const Usuarios = () => {
  const { usuarios, pasarDePagina, pag } = UseUsuario();

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

      <button className="btn btn-secondary" onClick={() => pasarDePagina(-1)}>
        Anterior
      </button>
      {pag.current >= 1 && (
        <button className="btn btn-secondary" onClick={() => pasarDePagina(1)}>
          Siguiente
        </button>
      )}
    </>
  );
};
