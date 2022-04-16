import React from "react";
import entrevistaService from "../../../services/entrevistaService";
import ModalBootstrap from "../../moleculas/modal-bootstrap"
import ModalWarning from "../modal-warning";


const Boton = (props) => {
    async function eliminarEntrevista(id) {
        await entrevistaService.delete(id);
        await props.buscarTodas();
    };

    const botones = {
        edit: () => {
            return (
                <>
                    <ModalBootstrap modalId={"Modal" + props.entrevista._id} titulo="Editar Entrevista" entrevista={props.entrevista}/>  
                        <button 
                            className="btn btn-primary pnt-btn" 
                            type="button" 
                            data-bs-toggle="modal" 
                            data-bs-target={"#Modal" + props.entrevista._id}
                            disabled = {props.entrevista.realizada}>
                            <span className="bi bi-pencil"></span>
                        </button>
                </>
            );
        },
        delete: () => {
            return (
                <>  
                    <ModalWarning 
                    description= {"Estás a punto de eliminar esta entrevista. ¿Deseas continuar?"}
                    entrevista={props.entrevista}
                    modalId={"modalDelete" + props.entrevista._id}
                    labelPrimary="Eliminar"
                    onClickPrimary={eliminarEntrevista}
                    type="delete"
                     />
                    <button 
                        className="btn btn-danger pnt-btn" 
                        type="button" 
                        data-bs-toggle="modal" 
                        data-bs-target={"#modalDelete" + props.entrevista._id}>
                        <span className="bi bi-trash"></span>
                    </button>
                </>
            );
        },
        addNew: () => {
            return (
                <>
                    <ModalBootstrap modalId="modalAdd" titulo="Agregar Entrevista" entrevista/>  
                    
                    { 
                        !props.circle &&
                        <div className="pnt-btn-add" >
                            <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#modalAdd">
                                <span className="bi bi-plus-circle"> Nueva Entrevista</span>
                            </button>
                        </div>
                    }
                    {
                        props.circle &&
                        <div className="pnt-add-circle">
                            <button className="btn btn-success pnt-circle btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#modalAdd">
                                <span className="bi bi-plus-lg"></span>
                            </button>
                        </div>
                    }
                </>
            )
        }
    }
    
    return botones[props.type]();
}

export default Boton;