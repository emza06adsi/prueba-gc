import React from 'react'
import axios from 'axios'
import { config } from '@fortawesome/fontawesome-svg-core'
import Loading from '../state/loading/loading'
import Error from '../state/error/error'
import ListaDevices from './lista/listaDevices'
let key=sessionStorage.getItem("key")

axios.interceptors.request.use(
    config=>{
        config.headers.authorization =`Bearer ${key}`
        return config;
    },
    error=>{
        return Promise.reject(error);
    }
);

class Devices extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:undefined,
            loading:true,
            error:false,
            cantidad:5
        }
        this.handleClick=this.handleClick.bind(this)
    }

    componentDidMount(){
     this.ferchData()
    }

    async ferchData(){
        const response = await axios.get(`https://api.myintelli.net/v1/2/devices?limit=${this.state.cantidad}&offset=0&search`);
        try {
            console.log(response);
            this.setState({data:response,loading:false})
            console.log(this.state.data)
            
          } catch (error) {
            this.setState({error:true})
            console.error(error);
          }
        }

        async handleClick(){
            let cantidad= await this.state.cantidad+ 5
            this.setState({cantidad:cantidad})
            this.componentDidMount()
        }    

    render(){
        if(this.state.loading==true){
            return(<Loading/>)
        }else if(this.state.error==true) {
            return(<Error/>)
        }else{
            return(
                <div>
                     <button className="containe" onClick={this.handleClick}>+</button>
                    <ListaDevices data={this.state.data.data.data.results}/>
             
                </div>
                )
        }
        
        
    }

}





export default Devices; 