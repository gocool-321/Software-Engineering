import React from 'react'
import img1 from "../img/01.jpg"
import img2 from "../img/02.jpg"
import img3 from "../img/03.jpg"
import background from "../img/Background.svg"
import jQueryCode from '../functions/jQueryCode'
import { useAuth0 } from '@auth0/auth0-react'
import { Redirect } from 'react-router-dom'
import Loading from "./Loading"
import Footer from './Footer'

export default function HomePage() {
    const { isAuthenticated, isLoading } = useAuth0()
    return <div>
        {
            isLoading ? <Loading /> : isAuthenticated ? <Redirect to="/dashboard" />
                : <div> <header class="text-center masthead  text-white "
                    style={{
                        backgroundImage: `url(${background})`,
                        height: "100vh",
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <div class="masthead-content" style={{

                    }}>
                        <div class="container">
                            <h1 class="masthead-heading mb-0 display-1">TODO List</h1>
                            <h1>Make workflow <span id="words">Simpler🙃</span></h1>
                            <a class="btn btn-primary btn-xl rounded-pill mt-5" role="button" >Get started</a>
                        </div>
                    </div>
                </header>
                    <section>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 order-lg-2">
                                    <div class="p-5"><img class="rounded-circle img-fluid"
                                        src={img3} /></div>
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
                                        src={img1} /></div>
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
                                        src={img2} /></div>
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
                    <Footer />
                    <script type="text/javascript">
                        {jQueryCode}
                    </script>
                </div>
        }

    </div>
}