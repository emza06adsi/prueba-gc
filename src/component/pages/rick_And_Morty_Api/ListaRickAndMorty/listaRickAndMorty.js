import React from 'react'
class ListaRickAndMorty extends React.Component{

    constructor(props){
        super(props)
        this.state={
            personaje:undefined    
        }
        this.handleClick=this.handleClick.bind(this)

    }

    handleClick(personajes){
        this.setState({personaje:personajes})

        // console.log(personajes)
    }

    listar(){
        return(
            this.props.Lista.map((personajes)=>{
                return(
                    <section key={personajes.id}>
                        
                        <img src={personajes.image} onClick={()=>{this.handleClick(personajes)}}/>
                        <h1>{personajes.name}</h1>
                        <p>{personajes.species}</p>
                    </section>
                )
            })
        )       
    }

render (){

    return(
        <React.Fragment>
            {this.listar()}
           
    {/* <h1>{JSON.stringify(this.state.personaje.id)}</h1> */}
        </React.Fragment>
    )
}
            
}
export default ListaRickAndMorty;