import React from 'react'
import Loading from '../state/loading/loading'
import Error from '../state/error/error'
import ListaRickAndMorty from './ListaRickAndMorty/listaRickAndMorty'
import './rickAndMorty.css'

class RickAndMorty extends React.Component{

    constructor(props){
        super(props )
           this.state={
            error:false,
            loading:false,
            data:undefined
        }
    }

    async componentDidMount (){
        this.setState({loading:false})
        try{
            
            let response = await fetch("https://rickandmortyapi.com/api/character/")
            let data= await response.json()
            this.setState({data: data.results,loading:true})
            console.log(this.state.data)
        
        }
        catch(error){
            console.log(error)
        }
    }
    render(){
        
        if (this.state.loading===false){
            return(
                <Loading/>
            )
        }else if(this.state.error===true){
            return(
                <Error/>
            )
        }

        return(
             <div className="containerRickAndMorty">
            <ListaRickAndMorty Lista={this.state.data} />
            </div>
        )
     }
    

}


export default RickAndMorty;