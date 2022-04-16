import React, { useState } from "react";
import entrevistaService from "../../services/entrevistaService";

const Form = (props) => {
  
  const entrevista = props.entrevista;
  const [nombreEntrevistado, setNombreEntrevistado] = useState(entrevista.nombreEntrevistado);
  const [fecha, setFecha] = useState(entrevista.fecha);

  function formatearDia(fecha) {
    return (fecha.getDate() <= 9 ? '0' + fecha.getDate() : fecha.getDate());
  }

  function formatearMes(fecha) {
    const mesActual = fecha.getMonth()+1;
    return (mesActual <= 9 ? '0' + mesActual : mesActual);
  }

  function fechaMaxima() { 
    const fechaMaxima = new Date();
    fechaMaxima.setDate(fechaMaxima.getDate() + 40);
    
    const res = fechaMaxima.getFullYear()
      +"-"+formatearMes(fechaMaxima)
      +"-"+formatearDia(fechaMaxima)
      +"T"+fechaMaxima.getHours()+":"+fechaMaxima.getMinutes();
    return res;
  }

  function fechaMinima() {
    const hoy = new Date(Date.now());
    
    const fechaMinima = hoy.getFullYear()
      +"-"+formatearMes(hoy)
      +"-"+formatearDia(hoy)
      +"T"+"00"
      +":"+"00";
    return fechaMinima;
  }
  async function onClickPrimary(_id) {
    const entrevista = {
      nombreEntrevistado: nombreEntrevistado.trim(),
      fecha: fecha,
      realizada: false,
    };

    _id != null? await entrevistaService.edit(_id, entrevista) : await entrevistaService.create(entrevista);
  }

  function actualizarNombre(event) {
    if (nombreEntrevistado === undefined && event.target.value === " "){
      return event.target.value = ""
    } else {
      setNombreEntrevistado(event.target.value);
    }
  }

  function actualizarFecha(event) {
    setFecha(event.target.value);
  }

  return (
    <>
      <form onSubmit={() => {onClickPrimary(entrevista._id)}}>
        <div className="modal-body">
          <h5>Ingrese los datos a continuación:</h5>

          <div className="mb-3">
            <label htmlFor="nombreEntrevistadoInput" className="form-label">
              Nombre entrevistado
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreEntrevistadoInput"
              placeholder="Pepito Juarez"
              value={nombreEntrevistado}
              onChange={actualizarNombre}
              pattern="[a-z A-ZáéíóúÁÉÍÓÚ]{1,150}"
              required/>
              <p className="muted">*Sólo se permiten letras</p>
          </div>
          <div className="mb-3">
            <label htmlFor="fechaInput" className="form-label">
              Fecha entrevista
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="fechaInput"
              value={fecha}
              onChange={actualizarFecha}
              min= {fechaMinima()}
              max= {fechaMaxima()}
              required/>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal">
            Cerrar
          </button>
          <button
            type="submit"
            className="btn btn-success">
            Guardar Entrevista
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
