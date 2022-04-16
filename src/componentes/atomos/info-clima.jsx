import React, { useEffect, useState } from "react";
import Axios from "axios";

function InfoClima() {
    
    const [temp, setTemp] = useState();
    const [descripcion, setDescripcion] = useState();
    const [icon, setIcon] = useState();

    useEffect( () => {
        Axios({
            url:"http://api.openweathermap.org/data/2.5/weather?lat=-34.6075682&lon=-58.4370894&lang=es&units=metric&appid=a6b503b059f7bfaeb20c7bc3bc66a5f1",
        })
            .then((response) => {
                const {data} = response;
                setTemp(Math.round(data.main.temp)+"°C");
                setDescripcion(data.weather[0].description);
                setIcon("https://openweathermap.org/img/w/"+data.weather[0].icon+".png");
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <>
            <img src={icon} alt="icon" />
            <strong>{temp}</strong>&nbsp;{capitalize(descripcion)}
        </>
    )
}

function capitalize(string){
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export default InfoClima;

