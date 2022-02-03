import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink, Redirect } from 'react-router-dom'
import Footer from './Footer'

export default function DashBoard() {
    const { isAuthenticated, user } = useAuth0()
    return <div>
        {!isAuthenticated ? <Redirect to="/" exact /> : <div>
            <div style={{ width: "100vw", height: "80vh", textAlign: "center" }}>
                <div className="form-floating mb-3" style={{ margin: "1rem", padding: "0px" }}>
                    <h1 style={{ margin: "0px", width: "auto" }}>Welcome {user.name}</h1>
                    <div style={{ textAlign: "center", margin: "2rem" }}>
                        <a className="btn btn-primary btn-lg" role="button" href="#myModal" data-bs-toggle="modal">Add board</a>
                    </div>
                    <div>
                        <section
                            className="d-flex justify-content-center align-items-center justify-content-md-center align-items-md-center"
                            style={{ margin: '0px', padding: "0px" }}>
                            <ul className="list-group">
                                <li className="list-group-item"><span>List Group Item 1</span></li>
                                <li className="list-group-item"><span>List Group Item 2</span></li>
                                <li className="list-group-item"><span>List Group Item 3</span></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        }
    </div >
}