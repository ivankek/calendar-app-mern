import React from "react";
import { startLogin, startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "",
    lPassword: "",
  });

  const { lEmail, lPassword } = formLoginValues;

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "",
    rEmail: "",
    rPassword: "",
    rPassword2: "",
  });

  const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (rPassword !== rPassword2) {
      return Swal.fire("Error", "Las contraseñas no coinciden", "error");
    }

    dispatch(startRegister(rName, rEmail, rPassword));
  };

  return (
    <div className="container login-container align-content-center">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin} className="px-4 py-3 p-lg-5">
            <div className="">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="lEmail"
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div>
              <input
                type="submit"
                className="btnSubmit col-4 col-md-7 col-lg-6 py-2 px-2"
                value="Login"
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister} className="px-4 py-3 p-lg-5">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="rName"
                value={rName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="rEmail"
                value={rEmail}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="rPassword"
                value={rPassword}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Confirmar contraseña"
                name="rPassword2"
                value={rPassword2}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div>
              <input
                type="submit"
                className="btnSubmit col-4 col-md-7 col-lg-6 py-2 px-2"
                value="Crear cuenta"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
