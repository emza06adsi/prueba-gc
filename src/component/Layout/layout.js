import React  from 'react'
import './layout.css'
import {Link} from 'react-router-dom'
import Aside from './aside/aside'
import Header from './header/header'
function Layout(props) {
    
    
    return (
        <div className="div">

                {/* <header className="header"></header> */}
                <main className="main">
                
                <Header/>
                
                <Aside/>
                    
                </main>
                <footer className="footer">
                    <strong>@meza</strong>
                </footer>


            </div>
        
    )
}
export default Layout; 