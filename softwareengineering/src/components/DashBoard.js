import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink, Redirect } from 'react-router-dom'
import axios from "axios"
import { v4 } from "uuid"
import Footer from './Footer'
import Loading from './Loading'
import NewKanban from './form'
import data from "./data"

const API = process.env.REACT_APP_API



export default function DashBoard() {
    const { isAuthenticated, user } = useAuth0()
    const [kanbans, setKanbans] = useState([])
    const [loading, setLoading] = useState(true)
    const [formvisible, toggleForm] = useState(false)

    function addNewKanban() {
        toggleForm(true)
    }

    async function getDataOfUser() {
        setLoading(true)
        const endPoint = `${API}/${user.sub}/.json`
        const Boards = await axios.get(endPoint)
        setKanbans(Boards.data)
        setLoading(false)
        console.log("Running...")
    }

    async function postDataOfuser(data) {
        setLoading(true)
        const endPoint = `${API}/${user.sub}/.json`
        const Response = await axios.put(endPoint, data)
        setKanbans(data)
        setLoading(false)
        return Response
    }


    function getValueFromForm(value) {
        const newKanban = {
            [v4()]: { name: value, ...data() }
        }
        const obj = { ...kanbans, ...newKanban }
        postDataOfuser(obj)
    }

    useEffect(getDataOfUser, [])


    if (!isAuthenticated) return <Redirect to="/" exact />
    return <div>
        <div style={{ width: "100vw", height: "auto", textAlign: "center" }}>
            <div className="form-floating mb-3" style={{ margin: "1rem", padding: "0px" }}>
                <h1 style={{ margin: "0px", width: "auto" }}>Welcome {user.name}</h1>
                <div style={{ textAlign: "center", margin: "2rem" }}>
                    <a className="btn btn-primary btn-lg" role="button" href="#" onClick={addNewKanban} data-bs-toggle="modal">Add board</a>
                </div>
                {formvisible && <NewKanban formId={v4()} getValueFromForm={getValueFromForm} toggleForm={toggleForm} />}
                {loading ? <Loading /> : <div>
                    <section
                        className="d-flex justify-content-center align-items-center justify-content-md-center align-items-md-center"
                        style={{ margin: '0px', padding: "0px" }}>
                        <ul className="list-group">
                            {Object.keys(kanbans).map((todo) => {
                                return <li key={todo} className="list-group-item"><NavLink to={`kanban/${todo}`}><span>{kanbans[todo].name}</span></NavLink></li>
                            }
                            )}
                        </ul>
                    </section>
                </div>}
            </div>
        </div>
    </div>
}