import React from 'react'
import contactstyle from './contact.module.css'

export default function Contact() {
  return (
    <div className="container w-50   m-auto mt-3 py-5 ">
        <div>
        <h2  className={`fs-1 text-center fw-bold ${contactstyle.firtcolor}`}>CONTACT ME</h2>
        <div className=" starline d-flex justify-content-center align-items-center mb-4">
            <div className={contactstyle.line}>
            </div>
            <div><i className={`fa-solid fa-star fs-3 ms-3 me-3 ${contactstyle.firtcolor}`}></i></div>
            <div className={contactstyle.line}>
            </div>
          </div>
        <form action="">
        <input type="text" className='form-control mb-5 border-0 border-bottom ' placeholder='Name' required="required" id="name"/>
        <input type="email" className='form-control mb-5 border-0 border-bottom ' placeholder='Email Address' required="required"/>
        <input type="tel" className='form-control mb-5 border-0 border-bottom ' placeholder='Phone Number' required="required"/>
        <textarea class="form-control border-0 border-bottom" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." ></textarea>
        <button className='btn btn text-white mt-4'>Sunmit</button>
        
        </form>
        </div>
  
    </div>
    
  )
}