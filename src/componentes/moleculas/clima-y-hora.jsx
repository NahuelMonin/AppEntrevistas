import React from "react";
import InfoClima from "../atomos/info-clima";
import Reloj from "../atomos/reloj";

const ClimaHora = (props) => {
    return (
        <div className='pnt-clima-hora'>
            <InfoClima/>
            <Reloj/>
        </div>
    )
}

export default ClimaHora;