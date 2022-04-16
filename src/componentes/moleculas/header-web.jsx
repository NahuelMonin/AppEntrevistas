import Logo from "../atomos/logo";
import TituloWeb from "../atomos/titulo-web";
import ClimaHora from "./clima-y-hora";

const HeaderWeb = (props) => {
        
    return (
    <div className="pnt-header">
        <Logo />
        <TituloWeb title={props.title}/>
        <ClimaHora />
    </div>
    );
}

export default HeaderWeb;