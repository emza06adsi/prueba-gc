import React from 'react'
import axios from 'axios'
import { config } from '@fortawesome/fontawesome-svg-core'
import Loading from './loading/loading'
import Eror from './error/error'
import Error from './error/error'
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
            error:false
        }
        // this.ferchData=this.ferchData.bind(this)
    }

    componentDidMount(){
        this.ferchData()
    // console.log(this.state.data)
    }

    async ferchData(){
        const response = await axios.get(`https://api.myintelli.net/v1/2/devices?limit=5`);
            
        try {
            console.log(response);
            this.setState({data:response,loading:false})
            console.log(this.state.data)
            
          } catch (error) {
            this.setState({error:true})
            console.error(error);
          }
        }

    render(){
        if(this.state.loading==true){
            return(<Loading/>)
        }else if(this.state.error==true) {
            return(<Error/>)
        }else{
            return(
                <h1>hola pallasos</h1>
             )
        }
        
        
    }

}





export default Devices; 