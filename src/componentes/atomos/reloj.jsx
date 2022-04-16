import React, { useEffect, useState } from "react";

function Reloj (props) {
    const hora = new Date();
    
    const [horaActual, setHoraActual] = useState({
        horas : hora.getHours(),
        minutos : hora.getMinutes(),
        segundos : hora.getSeconds()
    });
    
    useEffect(() => {
        const timer = setInterval(() => {
            const hora = new Date();
            setHoraActual({
                horas : validarSalida(hora.getHours()),
                minutos : validarSalida(hora.getMinutes()),
                segundos : validarSalida(hora.getSeconds())
            });
        }, 1000)
        return () => clearInterval(timer);
    }, [])

    return (
        <> {horaActual.horas}:{horaActual.minutos}:{horaActual.segundos}</>
    )
}

export default Reloj;

function validarSalida (number) {
    if (number <= 9)
        return "0" + number
    return number;
}