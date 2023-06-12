import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrum({ title }) {
  return (
    <div>
      <div className="breadcrumb-section">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between justify-content-md-between align-items-center flex-md-row flex-column">
                <h3 className="breadcrumb-title">{title}</h3>
                <div className="breadcrumb-nav">
                  <nav aria-label="breadcrumb">
                    <ul>
                      <li>
                        <Link To="/">Home</Link>
                      </li>
                      <li>
                        <Link href="#">Shop</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrum
