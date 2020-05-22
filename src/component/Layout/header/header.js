import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {

        return (
            // <nav className="navbar"></nav>
            <div className="header">
            <img src="" />
            <div className="header__menu">
              <div className="header__menu--profile">
        <p>{document.cookie}</p>
              </div>
              
              <ul>
                <li><a href="/Cuenta">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
                {/* <li>< Link to="/">Cerrar Sesión</Link></li> */}
                
              </ul>
              </div>
             
            </div>
              
      
        )
    }

}
export default Header;