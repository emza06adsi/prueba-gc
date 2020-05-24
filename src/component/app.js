import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Login from './login/login'
import Layout from './Layout/layout'
import Saludo from './pages/saludo/saludo'
import E404 from './pages/e404'
import Devices from './pages/devices./devices'
import RickAndMorty from './pages/rick_And_Morty_Api/rickAndMorty'
function App (){

    let data=[]
    
    data = JSON.parse(localStorage.getItem("user"))
    
    if(data===null){
        return(
            <BrowserRouter>
                <Switch>
                        <Route component={Login} />
                </Switch>
            </BrowserRouter> 
        )
    }
    else{
        return(
            <BrowserRouter>
         
                    <Switch>
                        <Route exact path="/" component={Login} />
                        
          
                    <Layout menu={data.modules}>
                        
                            <Route exact path={"/saludo"} component={Saludo}/>
                            <Route exact path={"/config/devices"} component={Devices} />
                            <Route exact path={"/rickAndMorty"} component={RickAndMorty} />
                            
                                                    
                            {/* <Route  component={E404}/> */}
                           
                        
                    </Layout>
                    <Route component={E404} />
    
                </Switch>
            </BrowserRouter>
        )
    }

    
}
   
    
    


export default App;
