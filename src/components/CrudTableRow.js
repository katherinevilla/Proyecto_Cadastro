import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {
    name,
    id,
    cpf,
    nascimento,
    pais,
    email,
    telefone,
    localidade,
    escolaridade
  } = el;

  let history = useHistory();

  const handleEdit = () => {
    setDataToEdit(el);
    history.push(`/editar/${id}`);
  };

  return (

    <tr>
     <td>{name}</td>
      <td>{cpf}</td>
      <td>{nascimento}</td>
      <td>{pais}</td>
      <td>{email}</td>
      <td>{telefone}</td>
      <td>{localidade}</td>
      <td>{escolaridade}</td>
 
      <td>
        <button className="btn btn-success" onClick={handleEdit}>
          Editar
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteData(id)}>
          Apagar
        </button>
      </td>
    </tr>
  
  );
};

export default CrudTableRow;
