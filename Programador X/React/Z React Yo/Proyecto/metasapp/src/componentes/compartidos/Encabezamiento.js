import '/Souls-1/Programador X/React/Z React Yo/Proyecto/metasapp/src/componentes/Encabezado.css'
import {ReactComponent as Logo} from '/Souls-1/Programador X/React/Z React Yo/Proyecto/metasapp/src/img/logo.svg';


function Encabezamiento() {
  return (
    <div className="encabezado">
      <div className="titulo">
        <a href="/">Metas App</a>
      </div>
      <nav className = "flex">
            <a href="/perfil" className="vinculo">Perfil
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
      </nav>
    </div>
  );
}

export default Encabezamiento;
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>