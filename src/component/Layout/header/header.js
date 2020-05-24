import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)

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
                    <FontAwesomeIcon icon="user"/>
                    <p>    {this.state.user.user.user_name}</p>
                    <FontAwesomeIcon icon="sort-down"/>
                    
                    
                </div>
                <ul>
                    <li><Link to="/Cuenta">Account</Link></li>
                    <li><a onClick={this.handleclick}>Sign off</a></li>
                
                </ul>
              </div>
             
            </div>
              
      
        )
    }

}
export default Header;