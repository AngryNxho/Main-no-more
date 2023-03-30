import estilos from './Encabezado.module.css'
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Perfil } from '../img/perfil.svg';
import Vinculo from './Vinculo';


function Encabezado() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <Logo className={estilos.logo} />
        <a href="/" className={estilos.titulo}>
          Metas App
        </a>
      </div>

      <nav>
      <Vinculo 
            href="/perfil" 
            Icono={Perfil}/>
       
      </nav>
    </header>
  );
}

export default Encabezado;
