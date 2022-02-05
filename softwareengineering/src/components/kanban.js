import React, { useEffect, useState } from "react";
import axios from "axios"

import Board from "react-trello";
import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";
// import creds from "../creds"



export default function Kanban(props) {

    const id = props.vals.match.params.id
    const name = props.vals.match.params.name

    const { isAuthenticated, isLoading, user } = useAuth0()

    const [kanbanSheet, setKanbanSheet] = useState({})
    const [loader, setLoader] = useState(true)
    useEffect(getKanban, [])


    var userSub = null
    try {
        userSub = user.sub
    }
    catch {
        return <Redirect to="/dashboard" />
    }
    const API = `${process.env.REACT_APP_API}/${userSub}/${id}.json`

    console.log(API)


    function getData(card) {
        setKanbanSheet(card)
        postData({ ...card, name })
    }

    async function getKanban() {
        const response = await axios.get(API)
        const data = { lanes: response.data.lanes }
        for (let i of data.lanes) {
            if (!i.hasOwnProperty('cards')) {
                i.cards = []
            }
        }
        setKanbanSheet(data)
        setLoader(false)
    }

    async function postData(data) {
        const newData = { ...data, name }
        const response = await axios.put(API, newData)
        console.log(response)
    }


    return (
        < div className="App" >

            {isLoading ? <Loading /> : isAuthenticated ? (loader ? <Loading /> : <Board
                style={{
                    backgroundColor: '#1572A1',
                    Padding: "1rem",
                }}
                className="d-flex"
                data={kanbanSheet}
                draggable
                laneDraggable
                collapsibleLanes
                editable
                canAddLanes
                editLaneTitle
                onDataChange={(data) => { getData(data) }}
            />
            ) : <Redirect to="/" exact />
            }
        </div >
    );
}

