import React from 'react';
import './aside.css'
import {Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)
class Aside extends React.Component {
    componentDidMount(){
        return(
            
            this.props.menus.menu.map(menu =>{
                return(
                    <div key={menu.key}>
                        <section  className="aside-paginas">
                            <Link to={"/"+menu.route}> <FontAwesomeIcon icon="cogs" />{menu.value}</Link>
                        </section>
                            {this.menu(menu.menu)}
                    </div>
            
        )
            
        })
        
        )
    }


    menu(menu){
        
        
        if(menu.length==0){
            console.log("errror")
        }   
        else{
            return(
                
                    <section key={menu[0].key} className="aside-paginas">
                        <Link to={"/"+menu[0].route}> <FontAwesomeIcon icon="cogs" />{menu[0].value}</Link>
                    </section>
                  
            )
        }

    }

    render() {

        
        return (
            <aside className="aside">
                <nav className="aside-navbar"></nav>

                {this.componentDidMount()}
              
                <div key="1">
                    <section  className="aside-paginas">
                        <Link to="/rickAndMorty">RICK-AND-MORTY-APY </Link>
                    </section>
                </div>

            </aside>
        )
    }

}
export default Aside;