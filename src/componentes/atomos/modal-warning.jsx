import React from "react";

function ModalWarning(props) {

    return (
    <div className="modal" tabIndex="-1" id={props.modalId}>
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          
          <div className="modal-header">
            <h5 className="modal-title">¡Atención!</h5>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
          </div>
          
          <div className="modal-body">
            <p className="">{props.description}</p>
          </div>
          
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => {props.buscarTodas()}}
            >
              Cancelar
            </button>
            {
              props.type === "delete" &&
              <button 
                type="button" 
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {props.onClickPrimary(props.entrevista._id)}}>
                {props.labelPrimary}
              </button>
            }
            {
              props.type === "check" &&
              <button 
                type="button" 
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => {props.onClickPrimary(props.entrevista._id)}}>
                {props.labelPrimary}
              </button>
            }
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default ModalWarning;
