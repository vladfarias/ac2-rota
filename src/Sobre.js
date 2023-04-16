import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Sobre(){
    const location = useLocation();
    const {id} = useParams();
    return(
        <div>
            <h1>Sobre: {id}</h1>
            <h1>Path: {location.pathname}</h1>
            <p><Link to='/'>Retornar a página Inicial</Link></p>
            <p><Link to='/usuario'>Usuário</Link></p>
        </div>
    );
}