import React from 'react'
import './listaDevises.css'
class ListaDevises extends React.Component{


    devices(){
        return(
            this.props.data.map(device=>{
                return(
                    <tr key={device.id_device}>
                        <td>{device.id_device}</td>
                        <td>{device.device_name}</td>
                        <td>{device.id_device_model}</td>
                        <td>{device.device_model}</td>
                        <td>{device.status}</td>
                    </tr>
                )
            })
        )
    }
    

    render(){
        return(
            <section className="container">
            <div className="modal-vista"  role="dialog">



                <table id="customers">
                    <thead>
                    <tr>
                        <th className="sticky">id_device</th>
                        <th className="sticky">device_name</th>
                        <th className="sticky">id_device_model</th>
                        <th className="sticky">device_model</th>
                        <th className="sticky">status</th>
                        
                    </tr>

                    </thead>
                    <tbody>
                    {this.devices()}
                    </tbody>


                </table>



            </div>

        </section>

        )
    }

}

export default ListaDevises;
// const ListaDevises =(props)=>{



// }