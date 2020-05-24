import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      user:JSON.parse(localStorage.getItem("user"))
    }
  }
  
  handleclick(){
    localStorage.clear()
    sessionStorage.clear()
    window.location="/"
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
                <li><Link to="/Cuenta">count</Link></li>
                <li><Link onClick={this.handleclick}>Sign off</Link></li>
                {/* <li>< Link to="/">Cerrar Sesión</Link></li> */}
                
              </ul>
              </div>
             
            </div>
              
      
        )
    }

}
export default Header;