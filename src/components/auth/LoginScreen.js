import React from "react";
import "./login.css";

export const LoginScreen = () => {
  return (
    <div className="container login-container align-content-center">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form className="px-4 py-3 p-lg-5">
            <div className="">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
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
          <form className="px-4 py-3 p-lg-5">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>

            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
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
