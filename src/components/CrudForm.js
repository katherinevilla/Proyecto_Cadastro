import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HashRouter, NavLink, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const initailForm = {
  name: "",
  cpf: "",
  nascimento: "",
  pais: "",
  genero: "",
  email: "",
  telefone: "",
  localidade: "",
  escolaridade: "",
  uf: "",
  id: null
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);
  let history = useHistory();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(form)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.cpf ||
      !form.nascimento ||
      !form.pais ||
      !form.genero ||
      !form.email ||
      !form.telefone ||
      !form.localidade ||
      !form.escolaridade ||
      !form.uf
    ) {
      alert("Dados incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
    history.push("/dados");
  };

  return (
    <div className="container-fluid">
      <br />
      <div className="container-fluid">
        <h3>{dataToEdit ? "Editar" : ""}</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">
                  Nome completo
                  <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome completo"
                    className="form-control"
                    onChange={handleChange}
                    value={form.name}
                  />
                </label>
              </div>
            </div>

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="name">
                  CPF
                  <input
                    type="text"
                    name="cpf"
                    placeholder="Digite o seu CPF"
                    className="form-control"
                    onChange={handleChange}
                    value={form.cpf}
                  />
                </label>
              </div>
            </div>

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="name">
                  Data de nascimento
                  <input
                    type="date"
                    name="nascimento"
                    className="form-control"
                    onChange={handleChange}
                    value={form.nascimento}
                  />
                </label>
              </div>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="name">
                  País de origem
                  <input
                    type="text"
                    name="pais"
                    placeholder="Digite o país de nascimento"
                    className="form-control"
                    onChange={handleChange}
                    value={form.pais}
                  />
                </label>
              </div>
            </div>

            <div className="col-3">
                <div className="form-group">
                  {" "}
                  Gênero
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      onChange={handleChange}
                      type="radio"
                      name="genero"
                      id="feminino"
                      value="feminino"
                      // checked
                    ></input>
                    <label className="form-check-label" htmlFor="feminino">
                      Feminino
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      onChange={handleChange}
                      type="radio"
                      name="genero"
                      id="masculino"
                      value="masculino"
                    ></input>
                    <label className="form-check-label" htmlFor="masculino">
                      Masculino
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      onChange={handleChange}
                      type="radio"
                      name="genero"
                      id="informar"
                      value="não informar"
                    ></input>
                    <label className="form-check-label" htmlFor="informar">
                      Desejo não informar
                    </label>
                  </div>
                </div>
              </div>
              

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="name">
                  Email
                  <input
                    type="text"
                    name="email"
                    placeholder="Digite seu email"
                    className="form-control"
                    onChange={handleChange}
                    value={form.email}
                  />
                </label>
              </div>
            </div>

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="name">
                  Telefone
                  <input
                    type="text"
                    name="telefone"
                    className="form-control"
                    placeholder="(22) 22222-2222"
                    onChange={handleChange}
                    value={form.telefone}
                  />
                </label>
              </div>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="name">
                  Cidade
                  <input
                    type="text"
                    name="localidade"
                    placeholder="Digite a cidade"
                    className="form-control"
                    onChange={handleChange}
                    value={form.localidade}
                  />
                </label>
              </div>
            </div>

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="name">
                  Estado
                  <input
                    type="text"
                    name="uf"
                    placeholder="Digite o estado"
                    className="form-control"
                    onChange={handleChange}
                    value={form.uf}
                  />
                </label>
              </div>
            </div>

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="name">
                  Escolaridade
                  <input
                    type="text"
                    name="escolaridade"
                    placeholder="Digite sua escolaridade"
                    className="form-control"
                    onChange={handleChange}
                    value={form.escolaridade}
                  />
                </label>
              </div>
            </div>

            <div className="col-3">
              <div className="form-group align-self-start mr-3">
                <img
                  src=""
                  className="rounded-circle align-self-start mr-3"
                  width="100"
                  alt="Foto da pessoa"
                ></img>
              </div>
            </div>
          </div>

          <br />

          <div className="col-12">
            <div className="form-group text-sm-center">
              <div className="container">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Cadastrar"
                />{" "}
                {""}
                <input
                  className="btn btn-secondary"
                  type="reset"
                  value="Limpar"
                  onClick={handleReset}
                />
              </div>
            </div>
          </div>
        </form>
        <Link to="/" className="btn btn-secondary botao "role="button">Página Inicial</Link>
      </div>
    </div>
  );
};

export default CrudForm;