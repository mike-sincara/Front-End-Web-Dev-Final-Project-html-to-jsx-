import React from 'react'

export default function Modal_Stick() {
    return (
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} aria-labelledby="portfolioModal4" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
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
}
