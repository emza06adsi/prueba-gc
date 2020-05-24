import React from 'react'
import './saludo.css'
import {BrowserRouter} from 'react-router-dom'
import descarga from './descarga.gif'
// import Aside from '../components/aside'
// import Header from '../components/header'

class Saludo extends React.Component {

    render() {
        return(
            <BrowserRouter>
        <div className="saludo">

            <p>BIENVENIDO</p>
            
            <img src={descarga}/>
              
        
        </div>

       </BrowserRouter>
        )
        
    }

}

export default Saludo;