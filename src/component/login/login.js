import React from "react"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link, Redirect } from "react-router-dom"
import './login.css'
class login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {};

        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {

        this.setState({
            [e.target.name]: e.target.value

        });

    };
    cambiotipo() {
        let inputP = document.getElementById("contraseña")
        if (inputP.type == "text") {
            inputP.type = "password"
            document.getElementById("imgcontraseña").src = "https://img.icons8.com/windows/20/000000/visible.png";
        } else {
            inputP.type = "text"
            document.getElementById("imgcontraseña").src = "https://img.icons8.com/windows/20/000000/invisible.png";
        }
    }

    handleSubmit = async e => {
    //     e.preventDefault();
    //     let correo = this.state.usuario

    //     let contrasena = this.state.contraseña
        

    //     let data = await axios.post("http://localhost:3001/api/auth/login", {
    //         correo,
    //         contrasena
    //     })
    //    document.getElementById("null").innerHTML=JSON.stringify(data)
    //     // if (data.body != null) {
    //     document.cookie=correo
    //     window.location="/pendientes"
    //     // }
    //     // else {
    //     //     document.getElementById("null").innerHTML = "datos errroneos"

    //     // }


    };

    render() {
        return (
            <React.Fragment>
                <p id="null"></p>
                <div className="login" id="login">
                    <h1>INICIO DE SESION </h1>

                    <form onSubmit={this.handleSubmit} className="input">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="https://img.icons8.com/windows/20/000000/user-male.png" />
                                </span>
                            </div>
                            <input
                                name="usuario"
                                onChange={this.handleChange}
                                value={this.state.usuusuario}
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                aria-label="Username"
                                aria-describedby="basic-addon1">

                            </input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="https://img.icons8.com/windows/20/000000/lock.png" />
                                </span>
                            </div>
                            <input
                                name="contraseña"
                                onChange={this.handleChange}
                                value={this.state.usucontraseña}
                                id="contraseña"
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                aria-label="Contraseña"
                                aria-describedby="basic-addon1">

                            </input>
                            <div className="input-group-prepend">
                                <span onClick={this.cambiotipo} className="input-group-text" id="basic-addon1">
                                    <img id="imgcontraseña" src="https://img.icons8.com/windows/20/000000/visible.png" />

                                </span>
                            </div>
                        </div>
                        <button class="login-btn" id="btnIngresar">INGRESAR</button>

                    </form>
                    <a href="">olvidaste tu contraseña</a>
                </div>
            </React.Fragment>
        )
    }


}
export default login;

