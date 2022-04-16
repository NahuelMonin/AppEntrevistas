import React, { useState } from "react";
import ModalWarning from "../modal-warning";
import entrevistaService from "../../../services/entrevistaService";

function BotonCheckBox (props) {
    async function actualizarRealizada(id) {
        const entrevista = {realizada : true};
        await entrevistaService.edit(id, entrevista);
        props.buscarTodas();
    }

    return (
        <>
            <ModalWarning 
                description="Esta acción no puede deshacerse. ¿Deseas continuar?" 
                modalId={"modalCheck"+ props.entrevista._id}
                labelPrimary={"Aceptar"}
                type="check"
                onClickPrimary={actualizarRealizada}
                entrevista={props.entrevista}
                buscarTodas = {props.buscarTodas}
            />
            <div className="form-check form-switch">
                <span>
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch"
                        data-bs-toggle="modal" 
                        data-bs-target={"#modalCheck" + props.entrevista._id}
                        defaultChecked={props.entrevista.realizada}
                        disabled = {props.entrevista.realizada}
                        checked={props.entrevista.realizada}>
                    </input>
                </span>
            </div>
        </>
    );    
}

export default BotonCheckBox;