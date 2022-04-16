import React from "react";
import BotoneraTarjeta from "./botonera-tarjeta";
import BotonCheckBox from "../atomos/botones/boton-checkbox";

function Tarjeta (props) {
    function convertirFecha() {
        let fechaGuardada = new Date(props.entrevista.fecha);
        
        function formatearHora(){
            return (fechaGuardada.getHours() <= 9 ? '0' + fechaGuardada.getHours() : fechaGuardada.getHours());
        }

        function formatearMin(){
            return (fechaGuardada.getMinutes() <= 9 ? '0' + fechaGuardada.getMinutes() : fechaGuardada.getMinutes());
        }
        
        function formatearDia(fecha) {
            
            if (fechaGuardada.getDate() <= 9) {
                return '0' + fechaGuardada.getDate();
            } else {
                return fechaGuardada.getDate();
            };
        }
        return formatearDia()
            +"/"+(fechaGuardada.getMonth()+1)
            +"/"+fechaGuardada.getFullYear()
            +" "+formatearHora()
            +":"+formatearMin();
    }
    
    return (
            <div className="card shadow pnt-card">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5 className="card-title">Entrevistado: {props.entrevista.nombreEntrevistado}</h5>
                        </div>
                        <div>
                            <BotoneraTarjeta entrevista={props.entrevista} buscarTodas={props.buscarTodas}/>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p>Fecha de la cita: {convertirFecha()}</p>
                    <div className="d-inline-flex">
                            <p>Realizada:&nbsp;&nbsp;</p>
                            <BotonCheckBox entrevista={props.entrevista} buscarTodas={props.buscarTodas}/>
                    </div>
                </div>
            </div>
    );
}

export default Tarjeta;