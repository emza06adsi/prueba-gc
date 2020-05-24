import React from 'react'
import './detalleRickAndMorty.css'
class DetalleRickAndMorty extends React.Component{

    constructor(props){
        super(props)
        this.state={
            personaje:undefined    
        }

    }

    cerrarModal(){
        let $overlay=document.getElementById('overlay_')
        let $modal=document.getElementById('modal_')
        $modal.style.animation='modal_Out .8s forwards'
        $overlay.classList.remove('active')
        
}

render (){

        return(
            <React.Fragment >
                          <div className="overlay_" id="overlay_">
                    <section className="modal_" id="modal_">
                        <div>
                        
                        <table id="customers">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>origin</th>
                        <th>location</th>
                        <th>status</th>
                        
                    </tr>

                    </thead>
                    <tbody>
                    <tr>
                        <td id="$id">id</td>
                        <td id="$name">name</td>
                        <td id="$origin">origin</td>
                        <td id="$location">location</td>
                        <td id="$status">status</td>
                        
                    </tr>
                    </tbody>
</table>
                            <div className="modal-buttons">
                                <button  onClick={this.cerrarModal}>close</button>
                            </div>
                        </div>

                    </section>

                </div>


           
            </React.Fragment>
        )
    }
            
}
export default DetalleRickAndMorty;