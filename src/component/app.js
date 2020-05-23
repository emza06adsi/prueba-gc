import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Login from './login/login'
import Layout from './Layout/layout'
import Saludo from './saludo'
import E404 from './e404'
function App (){

    let data=[]
    data = JSON.parse(localStorage.getItem("user"))

    return(
        <BrowserRouter>
     
                <Switch>
                    <Route exact path="/" component={Login} />
                    {/* <Route exact path='/pendientes' component={Saludo} /> */}
                    
      
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
   
    
    


export default App;
