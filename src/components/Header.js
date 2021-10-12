import React from "react";
import { HashRouter, NavLink, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(){
    return(
        <div className="container-fluid">
            <div className="container-fluid">
                <header className="container-fluid header"></header>
                <div className="container-fluid nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#">Página Inicial</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cadastrar" className="nav-link" href="#">Cadastrar Aluno</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dados"  className="nav-link" href="#">Dados dos Alunos</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
    )
};