import React from 'react'
import img1 from "../img/01.jpg"
import img2 from "../img/02.jpg"
import img3 from "../img/03.jpg"
import background from "../img/Background.svg"
import "../CSS/homeScreen-bgvideo.css"
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
                : <div>
                    <header>
                        <div class="video-background-holder">
                            <div class="video-background-overlay"></div>
                            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                <source src="https://stream.mux.com/5nnhh5401YZro8x9tVDH5O00JEjONpyfw8/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJkb3dubG9hZCI6IldvcmtpbmcgZnJvbSBob21lIiwiZXhwIjoxNjQ0OTA5Njc0LCJhdWQiOiJ2Iiwic3ViIjoiNW5uaGg1NDAxWVpybzh4OXRWREg1TzAwSkVqT05weWZ3OCJ9.djNMPnwpc_3KBpwAhfwzkejvJGLYSCJCkSjaiZO5z1j4vG-RMOn9ZVBjNfATazIk0aw_3Fh4LkXk6C6dRkSR-4FhR8KtAjdhrELBPBLtlYZQVV60EkzugmSYApF295pk9k73Q2_Rs4Q9ztImXXnpMqr37kRvi3tXRkpxD88VpFfSS8HNhfNl0550Xuyt2lsIvGbRqIupJR5FkFVuLfipZ2ixiOd4Y7An4Ueqn8GQH2s_pDCe52WNTEPVBKrdaUYuDW-xSfblqbiwka3eueQlBJ3io9eNZp-OQDZSN84KMGNLkqpnU_v2W4H3eQ627UbFNkOlJbp55Ky8Ayg0Hh9_Cg" type="video/mp4" />
                            </video>
                            <div class="video-background-content container h-100">
                                <div class="d-flex h-100 text-center align-items-center">
                                    <div class="w-100 text-white">
                                        <h1 class="masthead-heading mb-0 display-1">TODO List</h1>
                                        <h1>Make workflow <span id="words">Simpler🙃</span></h1>
                                        <a class="btn btn-primary btn-xl rounded-pill mt-5" role="button" href="#tags" >Get started</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* <header class="text-center masthead  text-white "
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
                                <a class="btn btn-primary btn-xl rounded-pill mt-5" role="button" href="#tags" >Get started</a>
                            </div>
                        </div>
                    </header> */}
                    <section id="tags">
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