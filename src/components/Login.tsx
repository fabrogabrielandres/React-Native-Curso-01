import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: null | string;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        nombre: "",
        token: "",
        username: "",
      };
    case "login":
      return {
        validando: false,
        nombre: action.payload.nombre,
        token: "acb1321321",
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, nombre, token }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const logerar=()=>{
      dispatch({
          type:"login",
          payload:{
              nombre:"gabriel",
              username:"fabro"
          }
      })
  }

  return (
    <>
      {validando ? (
        <>
          <div className="alert alert-info">validando...</div>
        </>
      ) : token ? (
        <>
          <div className="alert alert-danger">{`autenticado como${nombre}`}</div>
          <button className="btn btn-danger" onClick={()=>dispatch({type:"logout"})}>LogOut</button>
        </>
      ) : (
        <>
          <div className="alert alert-success">No autenticado</div>
          <button className="btn btn-primary" onClick={logerar}>Login</button>
        </>
      )}
    </>
  );
};


