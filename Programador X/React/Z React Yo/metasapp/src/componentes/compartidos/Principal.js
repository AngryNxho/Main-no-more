import estilos from './Principal.module.css'
import Vinculo from './Vinculo';
import { ReactComponent as ListaSVG} from '../img/lista.svg';
import { ReactComponent as NuevaSVG} from '../img/nueva.svg';



function Principal({children}) {
    return (
      <div className={estilos.Principal}>
        <aside className={estilos.aside}>
            <Vinculo 
            href="/lista"
            texto="Lista de metas"
            Icono={ListaSVG}>
            </Vinculo>

            <Vinculo 
            href="/crear" 
            texto="Nueva Meta"
            Icono={NuevaSVG}>
            </Vinculo>

        </aside>

        <main className="main">
            {children}
        </main>
      </div>
    );
  }
  
  export default Principal;
  
  