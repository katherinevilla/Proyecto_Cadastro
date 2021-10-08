import React from "react";
import CrudTableRow from "./CrudTableRow";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="">Dados do Aluno</h3>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Data de nascimento</th>
                <th>País</th>
                <th>Gênero</th>
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
                  <td colSpan="3">Sin datos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrudTable;
