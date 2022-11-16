import React from 'react'
import homeStayle from './home.module.css'
import img1 from "../../img/avataaars.svg"



export default function 
() {
  return (
    <div className={`vh-100 d-flex justify-content-center align-items-center ${homeStayle.homebg}`}>
        <div className="container mt-3  d-flex align-items-center flex-column">
          <img src={img1} alt="" className={` mb-3 ${ homeStayle.imgwidh}`} />
          <h1 className={`text-white fw-bold ${homeStayle.headersize}`}>START REACT</h1>
          <div className="starline d-flex justify-content-center align-items-center mb-4">
            <div className={homeStayle.line}>
            </div>
            <div><i className="fa-solid fa-star fs-3 text-white ms-3 me-3"></i></div>
            <div className={homeStayle.line}>
            </div>
          </div>
          <p className='text-white fs-5'>Graphic Artist - Web Designer - Illustrator</p>

            

        </div>

    </div>
  )
}
