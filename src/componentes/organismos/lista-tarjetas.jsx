import React from "react";
import Tarjeta from "../moleculas/tarjeta";

function ListaTarjetas (props) {

    function crearTarjeta (entrevista) {
        return <Tarjeta key={entrevista._id} entrevista= {entrevista} buscarTodas={props.buscarTodas}/>
    }

    return props.lista.map(crearTarjeta);
}

export default ListaTarjetas;