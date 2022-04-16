const axios = require('axios')

const entrevistaService = {
    findAll : async() => {
        let entrevistas = {};
        
        entrevistas = await axios.get('http://localhost:3000/api/entrevistas');

        return entrevistas.data;
    },

    create : async(entrevista) => {
        await axios.post('http://localhost:3000/api/nueva-entrevista', {
            nombreEntrevistado: entrevista.nombreEntrevistado,
            fecha: entrevista.fecha,
            realizada: entrevista.realizada
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err.message);
        });
    },
    
    delete : async (id) => {
        await axios.delete(`http://localhost:3000/api/eliminar/${id}`)
    },

    edit : async (id, entrevista) => {
        await axios.put(`http://localhost:3000/api/editar/${id}`, {entrevista
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err.message)
        });
    }
}
export default entrevistaService;