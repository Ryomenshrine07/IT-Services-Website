import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div style={{marginTop:'2%',height:'fit-content',padding:'0px',width:'100%'}}>
            <footer class="text-center text-white" style={{ backgroundColor: "#1c2331",width:'100%',margin:'0px'}}>
                <section class="d-flex justify-content-center p-3" style={{ backgroundColor: "orange",width:'100%',padding:'0px',margin:'0px'}}>
                    <div className='footerHeading'>
                        <span>Get connected with us on social networks</span>
                    </div>
                </section>
                <section class="">
                    <div class="container text-center text-md-start mt-4" style={{height:'fit-content'}}>
                        <div class="row mt-3" style={{padding:'0px',margin:'0px',height:'fit-content'}}>
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
                                <h6 class="text-uppercase fw-bold">Zee-Tee</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, ut. At doloremque inventore nemo consequatur.
                                </p>
                            </div>
                            <div class="col-md-2 col-lg-1 col-xl-2 mx-auto mb-4" style={{padding:'0px',margin:'0px',height:'fit-content'}}>
                                <h6 class="fw-bold">Products</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p style={{padding:'2px',margin:'2px'}}>
                                    <a href="#!" class="text-white">Link-1</a>
                                </p>
                                <p style={{padding:'2px',margin:'2px'}}>
                                    <a href="#!" class="text-white">Link-2</a>
                                </p>
                                <p style={{padding:'2px',margin:'2px'}}>
                                    <a href="#!" class="text-white">Link-3</a>
                                </p>
                                <p style={{padding:'2px',margin:'2px'}}>
                                    <a href="#!" class="text-white">Link-4</a>
                                </p>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{height:'fit-content'}}>
                                <h6 class="text-uppercase fw-bold">Useful links</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p style={{padding:'2px',margin:'2px'}}>
                                    <a href="#!" class="text-white">Link-1</a>
                                </p>
                                <p style={{padding:'2px',margin:'2px'}}>
                                    <a href="#!" class="text-white">Link-2</a>
                                </p>
                                <p style={{padding:'2px',margin:'2px'}}>
                                    <a href="#!" class="text-white">Link-3</a>
                                </p>
                                <p style={{padding:'2px',margin:'2px'}}>
                                    <a href="#!" class="text-white">Link-4</a>
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{height:'fit-content'}}>
                                <h6 class="text-uppercase fw-bold">Contact</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                <p style={{padding:'2px',margin:'2px'}}><i class="fas fa-home mr-3"></i> Bhopal, NE 10012, IN</p>
                                <p style={{padding:'2px',margin:'2px'}}><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p style={{padding:'2px',margin:'2px'}}><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p style={{padding:'2px',margin:'2px'}}><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>
                    </div>
                </section>
                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>© 2024 ZeeTee : 
                    <a class="text-white" href="https://someLink">SomeLink.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;