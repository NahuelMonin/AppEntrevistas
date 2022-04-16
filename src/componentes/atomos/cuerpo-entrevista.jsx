import React from "react";
import BotonCheckBox from "./botones/boton-checkbox";

function CuerpoEntrevista (props) {
    
    const {nombreEntrevistado, fecha, _id} = props.entrevista;
    
    return (
        <div >
            <h5 className="card-title">Entrevistado: {nombreEntrevistado}</h5>
            <p className="card-text">Fecha de la cita: {fecha}</p>
            <BotonCheckBox texto="Realizada: " _id={_id}/>
        </div>
    );
}

export default CuerpoEntrevista;