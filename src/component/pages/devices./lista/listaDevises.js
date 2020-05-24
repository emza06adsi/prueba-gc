import React from 'react'
import './listaDevises.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'


function useSeachDevises(data){

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

function ListaDevises (props) {

    const data = props.data
const {query,setQuery,filterDevice}= useSeachDevises(data)
    // debugger
    
  function  devices(){


    if(filterDevice.length ===0){
        return(
                    <tr key={1}>
                        <td>no</td>
                        <td>tenemos </td>
                        <td>datos</td>
                        <td>con este</td>
                        <td>nombre</td>
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
                <label>Filter devises</label>    
                <input 
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                >

                </input>
            </div>    
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
                    {devices()}
                    </tbody>


                </table>



            </div>

        </section>

        )
  

}

export default ListaDevises;
// const ListaDevises =(props)=>{



// }



