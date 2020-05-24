import React  from 'react'
import './layout.css'
import {Link} from 'react-router-dom'
import Aside from './aside/aside'
import Header from './header/header'
function Layout(props) {
    
    
    return (
        <div className="div">

                <main className="main">
                
                    <section className="content">
                            <Header />
                            {props.children}           
                    </section>

                    <Aside menus={props}/>
                    
                </main>
                <footer className="footer">
                    <strong>@meza</strong>
                </footer>


        </div>
        
    )
}
export default Layout; 