
import axios from 'axios'
import React, {useState,useEffect} from 'react'

export default function All() {
    const [feature,setFeatures] = useState([])

    useEffect(()=>{
        axios
            .get("http://localhost:3004/Modal")
            .then(res=>setFeatures(res.data));
    }, []);

    return (
        <div>
        {  
           feature.map((item)=>{
                return(
                    <div className="portfolio-modal modal fade" id={`portfolioModal${item.id}`} tabIndex={-1} aria-labelledby="portfolioModal5" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                        <div className="modal-body text-center pb-5">
                          <div className="container">
                            <div className="row justify-content-center">
                              <div className="col-lg-8">
                                {/* Portfolio Modal - Title*/}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{item.judul}</h2>
                                {/* Icon Divider*/}
                                <div className="divider-custom">
                                  <div className="divider-custom-line" />
                                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                  <div className="divider-custom-line" />
                                </div>
                                {/* Portfolio Modal - Image*/}
                                <img className="img-fluid rounded mb-5" src={`assets/img/portfolio/${item.image}.png`} alt="..." />
                                {/* Portfolio Modal - Text*/}
                                <p className="mb-4">{item.text}</p>
                                <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                  <i className="fas fa-times fa-fw" />
                                  Close Window
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
           
        }
        </div>
    )

}
