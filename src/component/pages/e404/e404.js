import React from 'react'
import './e404.css'
import {BrowserRouter} from 'react-router-dom'
class E404 extends React.Component{


    render(){
        return(
            <BrowserRouter>
            <div className="DIVERROR">
                <h1>404</h1>
                
                <p>LA PAGINA NO EXISTE O ESTA EN CONSTRUCCION</p>
                <p>INTENTALO MAS TARDE</p>
              
                  
            
            </div>
    
           </BrowserRouter>
            )
    }

}

export default E404;