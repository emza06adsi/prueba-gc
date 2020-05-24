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
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Origin</th>
                                        <th>Location</th>
                                        <th>Status</th>
                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td id="$id">Id</td>
                                        <td id="$name">Name</td>
                                        <td id="$origin">Origin</td>
                                        <td id="$location">Location</td>
                                        <td id="$status">Status</td>
                        
                                    </tr>
                                </tbody>
                            </table>
                            <div className="modal-buttons">
                                <button  onClick={this.cerrarModal}>Close</button>
                            </div>
                        </div>

                    </section>

                </div>


           
            </React.Fragment>
        )
    }
            
}
export default DetalleRickAndMorty;