import React from 'react'
import { useNavigate } from 'react-router'

export const RedirectLogin = () => {
    const history = useNavigate();
    return (
        <div>
            <section className=" gradient-form" style={{ "background-color": "#eee;", "height": "100vh" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center heading">
                                                <h4 onClick={() => { history("/") }} className="mt-1 mb-5 pb-1">Gurukool</h4>
                                            </div>
                                            <div className="text-center heading">
                                                <h2 onClick={() => {
                                                    history("/logIn")
                                                }}>Click Here to LogIn</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4"> Albert Einstein</h4>
                                            <p className="small mb-0">Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
