import React from 'react'
import './count.css'
class Count extends React.Component{

    constructor(props){
        super(props)
    this.state={
        user:JSON.parse(localStorage.getItem("user"))
    }
    }
        

    render(){
        return(
            <React.Fragment>
                <div className="portada">
                    <section className="portada-user">
                        <article className="user_img">
                            <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" width="200px"/>
                            <p>{this.state.user.user.user}</p>
                        </article>
                        <article className="user_data">
                            <section className="data--item">
                                <div className="item__label">
                                    <label>id:</label>
                                </div>
                                <div className="item__name">
                                    <p>{this.state.user.user.id_user}</p>
                                </div>
                            </section>
                            <section className="data--item">
                                <div className="item__label">
                                    <label>user:</label>
                                </div>
                                <div className="item__name">
                                    <p>{this.state.user.user.user_name}</p>
                                </div>
                            </section>
                            <section className="data--item">
                                <div className="item__label">
                                    <label>mail:</label>
                                </div>
                                <div className="item__name">
                                    <p>{this.state.user.user.email}</p>
                                </div>
                            </section>
                            <section className="data--item">
                                <div className="item__label">
                                    <label>phone:</label>
                                </div>
                                <div className="item__name">
                                    <p>{this.state.user.user.phone}</p>
                                </div>
                            </section>
                            <section className="data--item">
                                <div className="item__label">
                                    <label>ip:</label>
                                </div>
                                <div className="item__name">
                                    <p>{this.state.user.user.ip}</p>
                                </div>
                            </section>
                        </article>
                    </section>
                </div>
            </React.Fragment>
        )
    }

 }

 export default Count;