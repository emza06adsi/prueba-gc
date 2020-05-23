import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Login from './login/login'
import Layout from './Layout/layout'
import Saludo from './saludo'
import E404 from './e404'
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
                            <Route exact path={"config/devices"} component={Saludo} />
                            {/* <Route exact  component={E  404} /> */}
                            <Route component={E404} />
    
                        
                    </Layout>
    
                </Switch>
            </BrowserRouter>
        )
    }

    
}
   
    
    


export default App;
