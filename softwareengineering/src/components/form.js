import React, { useState } from 'react';

export default function NewKanban({ getValueFromForm, toggleForm }) {
    const [state, setState] = useState("")
    function onFormSubmit(e) {
        e.preventDefault()
        toggleForm(false)
        console.log(state)
        getValueFromForm(state)
    }
    return <form onSubmit={onFormSubmit} style={{ margin: "1rem 2rem" }}>
        <div class="form">
            <center>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} class="form-control" style={{ width: "50%" }} autoFocus placeholder="Enter Name of Kanban" />
            </center>
        </div>
    </form>
}