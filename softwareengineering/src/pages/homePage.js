import React from 'react'
import img1 from "./assets/img/01.jpg"
import img2 from "./assets/img/02.jpg"
import img3 from "./assets/img/03.jpg"
import { useAuth0 } from "@auth0/auth0-react";
export default function Homepage() {
    const { loginWithRedirect, user } = useAuth0();
    console.log(user)
    return <div>
        <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
            <div class="container"><a class="navbar-brand" href="#">TO-DO</a><button data-bs-toggle="collapse"
                class="navbar-toggler" data-bs-target="#navbarResponsive"><span class="visually-hidden">Toggle
                    navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#" onClick={loginWithRedirect}>Sign Up</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" onClick={loginWithRedirect}>Log In</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="text-center text-white masthead">
            <div class="masthead-content">
                <div class="container">
                    <h1 class="masthead-heading mb-0">TO-DO List</h1>
                    <h2 class="masthead-subheading mb-0">Make life simpler</h2><a
                        class="btn btn-primary btn-xl rounded-pill mt-5" role="button" href="#">Get started</a>
                </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
        </header>
        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="rounded-circle img-fluid"
                            src={img1} /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">For those about to rock...</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam
                                sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                                voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5"><img class="rounded-circle img-fluid"
                            src={img2} /></div>
                    </div>
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5">
                            <h2 class="display-4">We salute you!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam
                                sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                                voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="rounded-circle img-fluid"
                            src={img3} /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Let there be rock!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam
                                sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                                voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="py-5 bg-black">
            <div class="container">
                <p class="text-center text-white m-0 small">Copyright&nbsp;© Brand 2022</p>
            </div>
        </footer>
    </div>
}