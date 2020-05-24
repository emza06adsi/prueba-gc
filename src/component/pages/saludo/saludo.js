import React from 'react'
import './saludo.css'
import {BrowserRouter} from 'react-router-dom'
import descarga from './descarga.gif'

class Saludo extends React.Component {

    render() {
        return(
            <BrowserRouter>
            
                <div className="saludo">

                    <p>WELCOME!</p>
            
                    <img src={descarga}/>
              
        
                </div>

            </BrowserRouter>
        )
        
    }

}

export default Saludo;