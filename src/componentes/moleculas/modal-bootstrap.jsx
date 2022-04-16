import Form from "../atomos/form";

function ModalBootstrap(props) {
    return (
        <div className="modal fade" tabIndex="-1" id={props.modalId}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{props.titulo}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
                <Form onClickPrimary={props.onClickPrimary} entrevista={props.entrevista}/>
            </div>
          </div>
        </div>
      );
}

export default ModalBootstrap;
