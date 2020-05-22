import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Login from './login/login'
import Layout from './Layout/layout'
const App =()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Login} />

            
            

            <Layout>

            </Layout>

        </Switch>    
    </BrowserRouter>
);

export default App;
