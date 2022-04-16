import './App.css';
import HeaderWeb from './componentes/moleculas/header-web';
import ListaTarjetas from './componentes/organismos/lista-tarjetas';
import Boton from './componentes/atomos/botones/boton';
import entrevistaService from './services/entrevistaService'
import { useEffect, useState } from 'react';

function App() {
  const [entrevistas, setEntrevistas] = useState([]);
  
  async function buscarTodas() {
    const entrevistasResponse = await entrevistaService.findAll();
    setEntrevistas(entrevistasResponse);
  };

  useEffect(() => {
    buscarTodas();
  }, []);

  return (
    <>
      <HeaderWeb title="Tus entrevistas"/>
      <div className='container'>
        <Boton type="addNew" />
        <Boton type="addNew" circle={true}/>
        <div className="d-flex flex-row flex-wrap pt-1 mb-3 pnt-flex-space">
          <ListaTarjetas lista={entrevistas} buscarTodas={buscarTodas}/>
        </div>
      </div>
    </>
  );
}

export default App;