import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      user:JSON.parse(localStorage.getItem("user"))
    }
  }
  
  render() {

        return (
            // <nav className="navbar"></nav>
            <div className="header">
            <img src="" />
            <div className="header__menu">
              <div className="header__menu--profile">
        <p>{this.state.user.user.user_name}</p>
              </div>
              
              <ul>
                <li><a href="/Cuenta">count</a></li>
                <li><a href="/">Sign off</a></li>
                {/* <li>< Link to="/">Cerrar Sesión</Link></li> */}
                
              </ul>
              </div>
             
            </div>
              
      
        )
    }

}
export default Header;