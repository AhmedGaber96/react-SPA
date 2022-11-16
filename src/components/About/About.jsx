import React from 'react'
import aboutstyle from './about.module.css'

export default function About() {
  return (
    <div className={`${aboutstyle.aboutbg} vh-100`}>
        <div className="container py-5 w-50 m-auto d-flex justify-content-center align-items-center">
            <div className='d-flex align-items-center flex-column'>
            <h1 className={`text-white fw-bold ${aboutstyle.headersize}`}>START REACT</h1>
            <div className="starline d-flex justify-content-center align-items-center mb-4">
            <div className={aboutstyle.line}>
            </div>
            <div><i className="fa-solid fa-star fs-3 text-white ms-3 me-3"></i></div>
            <div className={aboutstyle.line}>
            </div>
          </div>
          <div className="row mt-5 text-white fw-light">
            <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>

            

            </div>

        </div>
    </div>
  )
}
