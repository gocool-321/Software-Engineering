import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export default function Dashboard() {
    const { user, logout } = useAuth0()
    return < div >
        <h1>Name: {user.name}</h1>
        <h1>email: {user.email}</h1>
        <img src={user.picture} />
        <button onClick={logout}>Sign out</button>
    </div >
}