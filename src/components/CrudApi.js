import React, { useEffect, useState } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { helpHttp } from "./helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:3001/dadospessoais";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Tem certeza que deseja apagar o registro com o id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" }
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div className="container-fluid">
      <HashRouter basename="VGKA">
        <header>
          <Header />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dados">
            {loading && <Loader />}
            {error && (
              <Message
                msg={`Error ${error.status}: ${error.statusText}`}
                bgColor="#dc3545"
              />
            )}
            {db && (
              <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            )}
          </Route>
          <Route exact path="/cadastrar">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route exact path="/editar/:id">
            <br />
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
        </Switch>
          <div>
          <Footer />
          </div>
      </HashRouter>
    </div>
  );
};

export default CrudApi;