import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../common/Footer'
import Header from '../common/Header'

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="error-section">
        <div className="container">
          <div className="row">
            <div className="error_form">
              <h1
                data-aos="fade-up"
                data-aos-delay={0}
                className="aos-init aos-animate"
              >
                404
              </h1>
              <h4
                data-aos="fade-up"
                data-aos-delay={200}
                className="aos-init aos-animate"
              >
                Opps! PAGE NOT BE FOUND
              </h4>
              <p
                data-aos="fade-up"
                data-aos-delay={400}
                className="aos-init aos-animate"
              >
                Sorry but the page you are looking for does not exist, have been
                <br /> removed, name changed or is temporarily unavailable.
              </p>
              <div className="row">
                <div className="col-10 offset-1 col-md-6 offset-md-3">
                  <div
                    className="default-search-style d-flex aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <input
                      className="default-search-style-input-box border-around border-right-none"
                      type="search"
                      placeholder="Search entire store here ..."
                      required
                    />
                    <button
                      className="default-search-style-input-btn"
                      type="submit"
                    >
                      <i className="icon-search" />
                    </button>
                  </div>
                  <Link
                    to="/"
                    data-aos="fade-up"
                    data-aos-delay={800}
                    className="aos-init aos-animate"
                  >
                    Back to home page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound)
