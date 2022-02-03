import React, { useEffect, useState } from "react";
import data from "./data";
import Board from "react-trello";
import today from "../functions/getDate"
import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";

export default function Kanban() {

    const localStorage = window.localStorage.getItem("kanban")
    const InitialData = localStorage ? JSON.parse(localStorage) : data()
    const [kanbanSheet, setKanbanSheet] = useState(InitialData)

    function getData(card, id) {
        card["label"] = today
        const current = kanbanSheet
        const number = id[id.length - 1]
        current["lanes"][number - 1]["cards"].push(card)
        setKanbanSheet(current)
    }

    function addChange(board) {
        setKanbanSheet(board)
    }

    useEffect(() => {
        console.log(kanbanSheet)
        window.localStorage.setItem("kanban", JSON.stringify(kanbanSheet))
    }, [kanbanSheet])

    const { isAuthenticated, isLoading } = useAuth0()
    return (
        <div className="App">
            {isLoading ? <Loading /> : isAuthenticated ? <div style={{
                backgroundColor: '#34384c',
                textAlign: "center"
            }}>
                <h1 style={{ color: "#FBF8F1", padding: "2%" }}>Kanban</h1>
                <Board
                    style={{
                        backgroundColor: '#34384c',
                        textAlign: "center",
                        height: "100vh",
                    }}
                    className="d-flex justify-content-center "
                    data={kanbanSheet}
                    draggable
                    laneDraggable={false}
                    onCardAdd={(card, id) => { getData(card, id) }}
                    onDataChange={(card) => addChange(card)}
                    editable
                />
            </div> : <Redirect to="/" exact />}
        </div>
    );
}

