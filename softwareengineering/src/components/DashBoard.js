import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink, Redirect } from 'react-router-dom'

export default function DashBoard() {
    const { isAuthenticated, user } = useAuth0()
    return <div>
        {isAuthenticated ? <div>
            <h1>Name: {user.name}</h1>
            <NavLink to="/kanban">Go to Kanban</NavLink>
        </div> : <Redirect to="/" exact />}
    </div>
}