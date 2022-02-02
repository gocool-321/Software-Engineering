import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
    return <nav class="navbar navbar-dark navbar-expand-lg bg-dark navbar-custom">
        <div class="container">
            <NavLink class="navbar-brand" to="/">TODO</NavLink><button data-bs-toggle="collapse"
                class="navbar-toggler" data-bs-target="#navbarResponsive"><span class="visually-hidden">Toggle
                    navigation</span><span class="navbar-toggler-icon"></span></button>
            {
                isAuthenticated ? <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" onClick={logout} href="#">Sign Out</a></li>
                    </ul>
                </div> : <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" onClick={loginWithRedirect} href="#">Log In</a></li>
                        <li class="nav-item"><a class="nav-link" onClick={loginWithRedirect} href="#">Sign UP</a></li>
                    </ul>
                </div>
            }
        </div>
    </nav >
}