import React from 'react'
import './listaRickAndMorty.css'
import DetalleRickAndMorty from  './detalleRickAndMorty/detalleRickAndMorty'
class ListaRickAndMorty extends React.Component{

    constructor(props){
        super(props)
        this.state={
            personaje:undefined    
        }
        this.handleClick=this.handleClick.bind(this)

    }

    handleClick(event){
        
        let peronaje=[]
        peronaje=JSON.parse(event.target.id)
        // debugger
        let $overlay=document.getElementById('overlay_')
        let $modal=document.getElementById('modal_')
        $modal.style.animation='modal_In .8s forwards'
        $overlay.classList.add('active')
        document.getElementById('$id').innerText=peronaje.id
        document.getElementById('$name').innerText=peronaje.name
        document.getElementById('$origin').innerText=peronaje.origin.name
        document.getElementById('$location').innerText=peronaje.location.name
        document.getElementById('$status').innerText=peronaje.status
    }

    listar(){
        return(
            this.props.Lista.map((personajes)=>{
                return(
                    <section key={personajes.id} className="lista">
                    <section className="lista-img">
                        <img src={personajes.image}></img>
                    </section>
                    <section className="lista-info">

                       <section className="lista-info_data"> 
                            <p>{personajes.name}</p>
                           <p>{personajes.species}</p>
                               <button id={JSON.stringify(personajes)} onClick={this.handleClick}>properties</button>
                           
                       </section>

                   </section>
               </section>
            
                )
            })
        )       
    }

render (){

    return(
        <React.Fragment >
            {this.listar()}
           <DetalleRickAndMorty/>
        </React.Fragment>
    )
}
            
}
export default ListaRickAndMorty;