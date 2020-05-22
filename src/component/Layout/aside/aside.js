import React from 'react';
import './aside.css'
import {Link} from 'react-router-dom'

// import OpsionesAside from './opsionesAside'
class Aside extends React.Component {
    render() {

        return (
            <aside className="aside">
                <nav className="aside-navbar"></nav>

                <section className="aside-paginas">
                <Link to={"https://react-bootstrap.github.io/getting-started/introduction"}><p>data</p></Link>
                </section>
              

                {/* <OpsionesAside link="/pendientes" nombre="pedidos pendientes"/>
                
                <OpsionesAside link="/realizados" nombre="pedidos realizados"/>
                
                <OpsionesAside link="/clientes" nombre="clientes"/>
                
                <OpsionesAside link="/productos" nombre="productos"/> */}
                
                
            </aside>
        )
    }

}
export default Aside;