import React, { useState } from 'react';

export default function NewKanban({ getValueFromForm, toggleForm }) {
    const [state, setState] = useState("")
    const [error, raiseError] = useState(false)
    function onFormSubmit(e) {
        e.preventDefault()
        const trimmedString = state.trim()
        if (trimmedString.length === 0) {
            raiseError(true)
            return
        }
        toggleForm(false)
        console.log(state)
        getValueFromForm(trimmedString)
    }

    function onFormChange(e) {
        setState(e.target.value)
        raiseError(false)
    }

    return <form onSubmit={onFormSubmit} style={{ margin: "1rem 2rem" }}>
        <div class="form">
            <center>
                <input type="text" value={state} onChange={onFormChange} class="form-control" style={{ width: "50%", margin: "1rem 2rem" }} autoFocus placeholder="Enter Name of Kanban" />
                {error && <p style={{ color: "red", margin: "1rem 2rem" }}>Enter valid Board Name</p>}
                <button className="btn btn-primary" type="submit">Go with it</button>
            </center>
        </div>
    </form>
}