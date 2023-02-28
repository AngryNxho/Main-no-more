import DisplayContent from './DisplayContent';
import Styles from '../src/styles.css';

function App(){
    return (
        <div className='main'>
            <div>Sony XM4 vs Astro a 50</div>
            <div>
                <div className="hola">
                    <DisplayContent Styles= "red" title = "Sony XM4" resume={"This is my actual choice"} img={"https://www.sony.cl/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"} />
                </div>


                    <DisplayContent  title= "Astro a50" resume={"This was my first option a few months ago"} img={"https://falabella.scene7.com/is/image/Falabella/gsc_113341171_616095_1?wid=800&hei=800&qlt=70"}/>
            </div>
        </div>

    )
}

export default App;