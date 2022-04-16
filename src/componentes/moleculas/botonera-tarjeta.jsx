import React from "react";
import Boton from "../atomos/botones/boton";

function BotoneraTarjeta (props) {
    return (
        <div className="pnt-botonera">
            <Boton type="edit" entrevista={props.entrevista} onClickEdit={props.onClickEdit}/>
            <Boton type="delete" entrevista={props.entrevista} buscarTodas={props.buscarTodas}/>
        </div>
    )
}

export default BotoneraTarjeta;