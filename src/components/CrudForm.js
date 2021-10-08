import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
      alert("Datos incompletos");
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
    history.push("/");
  };

  return (
    <div class="container-fluid">
      <legend>Dados pessoais</legend>
      <div class="container-fluid">
        <h3>{dataToEdit ? "Editar" : ""}</h3>
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label for="name">
                  Nome completo
                  <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome completo"
                    class="form-control"
                    onChange={handleChange}
                    value={form.name}
                  />
                </label>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group">
                <label for="name">
                  CPF
                  <input
                    type="text"
                    name="cpf"
                    placeholder="Digite o seu CPF"
                    class="form-control"
                    onChange={handleChange}
                    value={form.cpf}
                  />
                </label>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group">
                <label for="name">
                  Data de nascimento
                  <input
                    type="date"
                    name="nascimento"
                    class="form-control"
                    onChange={handleChange}
                    value={form.nascimento}
                  />
                </label>
              </div>
            </div>
          </div>

          <br />

          <div class="row">
            <div class="col-3">
              <div class="form-group">
                <label for="name">
                  País de origem
                  <input
                    type="text"
                    name="pais"
                    placeholder="Digite o país de nascimento"
                    class="form-control"
                    onChange={handleChange}
                    value={form.pais}
                  />
                </label>
              </div>
            </div>

            <div class="col-3">
                <div class="form-group">
                  {" "}
                  Gênero
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      onChange={handleChange}
                      type="radio"
                      name="genero"
                      id="feminino"
                      value="femenino"
                      checked
                    ></input>
                    <label class="form-check-label" for="feminino">
                      Femenino
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      onChange={handleChange}
                      type="radio"
                      name="genero"
                      id="masculino"
                      value="option2"
                    ></input>
                    <label className="form-check-label" htmlFor="masculino">
                      Masculino
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      onChange={handleChange}
                      type="radio"
                      name="genero"
                      id="informar"
                      value="informar"
                    ></input>
                    <label class="form-check-label" for="informar">
                      Desejo não informar
                    </label>
                  </div>
                </div>
              </div>
            {/* <div class="col-3">
              <div class="form-group">
                <label for="name">
                  Gênero
                  <input
                    type="text"
                    name="genero"
                    placeholder="Digete seu gênero"
                    class="form-control"
                    onChange={handleChange}
                    value={form.genero}
                  />
                </label>
              </div>
            </div> */}

            <div class="col-3">
              <div class="form-group">
                <label for="name">
                  Email
                  <input
                    type="text"
                    name="email"
                    placeholder="Digite seu email"
                    class="form-control"
                    onChange={handleChange}
                    value={form.email}
                  />
                </label>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group">
                <label for="name">
                  Telefone
                  <input
                    type="text"
                    name="telefone"
                    class="form-control"
                    placeholder="(22) 22222-2222"
                    onChange={handleChange}
                    value={form.telefone}
                  />
                </label>
              </div>
            </div>
          </div>

          <br />

          <div class="row">
            <div class="col-3">
              <div class="form-group">
                <label for="name">
                  Cidade
                  <input
                    type="text"
                    name="localidade"
                    placeholder="Digite a cidade"
                    class="form-control"
                    onChange={handleChange}
                    value={form.localidade}
                  />
                </label>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group">
                <label for="name">
                  Estado
                  <input
                    type="text"
                    name="uf"
                    placeholder="Digite o estado"
                    class="form-control"
                    onChange={handleChange}
                    value={form.uf}
                  />
                </label>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group">
                <label for="name">
                  Escolaridade
                  <input
                    type="text"
                    name="escolaridade"
                    placeholder="Digite sua escolaridade"
                    class="form-control"
                    onChange={handleChange}
                    value={form.escolaridade}
                  />
                </label>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group align-self-start mr-3">
                <img
                  src=""
                  class="rounded-circle align-self-start mr-3"
                  width="100"
                  alt="Foto da pessoa"
                ></img>
              </div>
            </div>
          </div>

          <br />

          <div class="col-12">
            <div class="form-group text-sm-center">
              <div class="container">
                <input
                  class="btn btn-primary"
                  type="submit"
                  value="Cadastrar"
                />{" "}
                {""}
                <input
                  class="btn btn-secondary"
                  type="reset"
                  value="Limpiar"
                  onClick={handleReset}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrudForm;