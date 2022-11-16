import React from 'react'
import footerStyle from './footer.module.css'

export default function Footer() {
  return (
    <footer className={` pt-5 ${footerStyle.footerbg}`}>
        <div className="footerMAIN w-75  m-auto ">
        <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0 px-3 text-center text-white ">
                        <h4 className='fw-bold'>LOCATION</h4>
                        <p className='fw-normal  fs-6'>2215 John Daniel DriveClark <br />, MO 65243</p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0 px-3 text-center text-white ">
                        <h4 className='fw-bold'>AROUND THE WEB</h4>
                        <a className={`${footerStyle.footericonn}`} href="#!">
                        <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a className={`ms-2 ${footerStyle.footericonn}`} href="#!">
                        <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a className={` ms-2 ${footerStyle.footericonn}`} href="#!">
                        <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a className={` ms-2 ${footerStyle.footericonn}`} href="#">
                        <i class="fa-brands fa-dribbble"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0 px-3 text-center text-white ">
                        <h4 className='fw-bold'>ABOUT FREELANCER</h4>
                        <p className='fw-normal  fs-6'>Freelance is a free to use, MIT <br /> licensed Bootstrap theme created by <br /> Route</p>
                    </div>
                </div> 
        </div>
        </div>
        <div className={` d-flex justify-content-center align-items-center pt-3 ${footerStyle.endfooter}`}>
            <p>Copyright © Your Website 2021</p>


        </div>

    </footer>
  )
}
