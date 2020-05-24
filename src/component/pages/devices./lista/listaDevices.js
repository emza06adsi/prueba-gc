import React from 'react'
import './listaDevices.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'


function useSeachDevices(data){

    const [query, setQuery] = React.useState('')
    const [filterDevice, setFilterDevice] =React.useState(data)    
    // const filterDevice=data.(dataFilter =>{
    // return  dataFilter.includes(query)
    // })

    React.useMemo( () =>{ 
        const result = data.filter(dataFilter=>{

            return (
                `${dataFilter.id_device}
                ${dataFilter.device_name}
                ${dataFilter.device_model}
                `
                .toLowerCase()
                .includes(query.toLowerCase())
                )
            })
            setFilterDevice(result)
        },[data,query]);

        return {query,setQuery,filterDevice }
}

function ListaDevices (props) {

    const data = props.data
const {query,setQuery,filterDevice}= useSeachDevices(data)
    // debugger
    
  function  devices(){


    if(filterDevice.length ===0){
        return(
                    <tr key={1}>
                        <td>not</td>
                        <td>we have </td>
                        <td>data</td>
                        <td>with</td>
                        <td>Name</td>
                    </tr>
        )
    }

    return(
        filterDevice.map(device=>{
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
    

  
        return(
            <section className="container">
            <div className="form-group ">
                <label>FILTER BY: <strong>Id_device</strong> OR <strong> Device_name </strong> OR <strong>Device_model</strong></label>    
          
                <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                <img src="https://img.icons8.com/metro/20/000000/detective.png"/>
                                    {/* <img src="https://img.icons8.com/windows/20/000000/user-male.png" /> */}
                                </span>
                            </div>
                            <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}>
                                </input>
                        </div>
                
            </div>    
            <div className="modal-vista"  role="dialog">



                <table id="customers">
                    <thead>
                    <tr>
                        <th className="sticky">Id_device</th>
                        <th className="sticky">Device_name</th>
                        <th className="sticky">Id_device_model</th>
                        <th className="sticky">Device_model</th>
                        <th className="sticky">Status</th>
                        
                    </tr>

                    </thead>
                    <tbody>
                    {devices()}
                    </tbody>


                </table>



            </div>

        </section>

        )
  

}

export default ListaDevices;
