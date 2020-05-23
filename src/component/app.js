import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Login from './login/login'
import Layout from './Layout/layout'
import Saludo from './saludo'
function App (){

    console.log("datos")

    return(
        <BrowserRouter>
     
                <Switch>
                    <Route exact path="/" component={Login} />
                    {/* <Route exact path='/pendientes' component={Saludo} /> */}
                    
      
                <Layout>
                    
                        <Route exact path="/saludo" component={Saludo} />

                    
                </Layout>

            </Switch>
        </BrowserRouter>
    )
}
   
    
    


export default App;
