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
        if (Boards.data) {
            setKanbans(Boards.data)
        } else {
            setKanbans([])
        }
        setLoading(false)
        console.log("Running...")
    }

    async function postDataOfuser(data) {
        setLoading(true)
        const endPoint = `${API}/${user.sub}/.json`
        const Response = await axios.patch(endPoint, data)
        setKanbans(data)
        setLoading(false)
        return Response
    }

    async function putDataOfuser(data) {
        setLoading(true)
        const endPoint = `${API}/${user.sub}/.json`
        const Response = await axios.put(endPoint, data)
        setKanbans(data)
        setLoading(false)
        return Response
    }

    function handleDelete(todoId) {
        const newState = {}
        for (let i in kanbans) {
            if (i != todoId) {
                newState[i] = kanbans[i]
            }
        }
        // console.log(newState)
        setKanbans(newState)
        putDataOfuser(newState)
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

                        <div class="d-md-flex justify-content-md-center align-items-md-center"
                            style={{ marginTop: "2rem" }}>
                            <ul className="list-group" style={{ width: "100vh" }}>
                                {Object.keys(kanbans).map((todo) => {
                                    return <li className="list-group-item">
                                        <div className="container d-md-flex justify-content-evenly align-items-start align-items-md-center">
                                            <NavLink
                                                to={`kanban/${todo}/${kanbans[todo].name}`} >
                                                <span>{kanbans[todo].name}</span>
                                            </NavLink>
                                            <button class="btn btn-danger" type="button" onClick={() => handleDelete(todo)}>
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                }
                                )}
                            </ul>
                        </div>

                    </section>
                </div>}
            </div>
        </div>
    </div >
}