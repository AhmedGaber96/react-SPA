import React from 'react'
import r from './portfolio.module.css'
import img1 from "../../img/cabin.png"
import img2 from "../../img/cake.png"
import img3 from "../../img/circus.png"
import img4 from "../../img/game.png"
import img5 from "../../img/safe.png"
import img6 from "../../img/cabin.png"
export default function PortFolio() {


  return (
    <section className='protfolio py-5'>
        <div className="container text-center">
          <h2 className={`fs-1 fw-bolder ${r.firtcolor}`}>PORTFOLIO</h2>
          <div className="starline d-flex justify-content-center align-items-center mb-4">
            <div className={r.line}>
            </div>
            <div><i className={`fa-solid fa-star fs-3 ms-3 me-3 ${r.firtcolor}`}></i></div>
            <div className={r.line}>
            </div>
          </div>
           <div className="row px-5 gy-3">
            <div className="col-md-4 rounded-1 position-relative " >
              <div className={`w-100 h-100 position-relative overflow-auto ${r.activites }`}>
              <img src={img1} alt=""  className='w-100 rounded-1'/>
              <div className={`position-absolute  d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0 rounded-1 ${r.layer}`} >
              <i className="fa-solid fa-plus fs-1" ></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 rounded-1 position-relative " >
              <div className={`w-100 h-100 position-relative overflow-auto ${r.activites }`} id='yes'>
              <img src={img2} alt=""  className='w-100 rounded-1'/>
              <div className={`position-absolute  d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0 rounded-1 ${r.layer}`} >
              <i className="fa-solid fa-plus fs-1" ></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 rounded-1 position-relative " >
              <div className={`w-100 h-100 position-relative overflow-auto ${r.activites }`}>
              <img src={img3} alt=""  className='w-100 rounded-1'/>
              <div className={`position-absolute  d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0 rounded-1 ${r.layer}`} >
              <i className="fa-solid fa-plus fs-1" ></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 rounded-1 position-relative " >
              <div className={`w-100 h-100 position-relative overflow-auto ${r.activites }`}>
              <img src={img4} alt=""  className='w-100 rounded-1'/>
              <div className={`position-absolute  d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0 rounded-1 ${r.layer}`} >
              <i className="fa-solid fa-plus fs-1" ></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 rounded-1 position-relative " >
              <div className={`w-100 h-100 position-relative overflow-auto ${r.activites }`}>
              <img src={img5} alt=""  className='w-100 rounded-1'/>
              <div className={`position-absolute  d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0 rounded-1 ${r.layer}`} >
              <i className="fa-solid fa-plus fs-1" ></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 rounded-1 position-relative " >
              <div className={`w-100 h-100 position-relative overflow-auto ${r.activites }`}>
              <img src={img6} alt=""  className='w-100 rounded-1'/>
              <div className={`position-absolute  d-flex justify-content-center align-items-center top-0 start-0 end-0 bottom-0 rounded-1 ${r.layer}`} >
              <i className="fa-solid fa-plus fs-1" ></i>
              </div>
              </div>
            </div>
            
            
            </div> 

        </div>

    </section>
  )
}
