import React from "react";
import CrudTableRow from "./CrudTableRow";
import { HashRouter, NavLink, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <br />
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nome completo</th>
                <th>CPF</th>
                <th>Data de nascimento</th>
                <th>País</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Localidade</th>
                <th>Escolaridade</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((el) => (
                  <CrudTableRow
                    key={el.id}
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="3">Sem dados</td>
                </tr>
              )}
            </tbody>
          </table>
          <Link to="/cadastrar"  className="btn btn-primary"role="button">Voltar ao Cadastro</Link>{""} {""}
          <Link to="/" className="btn btn-secondary"role="button">Página Inicial</Link>
        </div>
      </div>
    </div>
  );
};

export default CrudTable;
