import './Principal.css';
import Vinculo from './Vinculo';

function Principal({children}) {
    return (
      <div className="principal">
        <aside className="aside">
            <Vinculo href="/lista" texto="Lista">
                
            </Vinculo>
        </aside>

        <main className="main">
            {children}
        </main>
      </div>
    );
  }
  
  export default Principal;
  
  