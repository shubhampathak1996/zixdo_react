import React from 'react';
import { Link } from 'react-router-dom';
import { UseSingleLocation } from '../../shared/hooks/UseFetch';

function AlphabeticalSearch({ setText, text, centers, center_id }) {
  console.log('centers', centers);
  return (
    <>
      <section className="sec-50 alphabetical-search">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="alpha-box">
                <div onClick={() => setText('A')}>A</div>
                <div onClick={() => setText('B')}>B</div>
                <div onClick={() => setText('C')}>C</div>
                <div onClick={() => setText('D')}>D</div>
                <div onClick={() => setText('E')}>E</div>
                <div onClick={() => setText('F')}>F</div>
                <div onClick={() => setText('G')}>G</div>
                <div onClick={() => setText('H')}>H</div>
                <div onClick={() => setText('I')}>I</div>
                <div onClick={() => setText('J')}>J</div>
                <div onClick={() => setText('K')}>K</div>
                <div onClick={() => setText('L')}>L</div>
                <div onClick={() => setText('M')}>M</div>
                <div onClick={() => setText('N')}>N</div>
                <div onClick={() => setText('O')}>O</div>
                <div onClick={() => setText('P')}>P</div>
                <div onClick={() => setText('Q')}>Q</div>
                <div onClick={() => setText('R')}>R</div>
                <div onClick={() => setText('S')}>S</div>
                <div onClick={() => setText('T')}>T</div>
                <div onClick={() => setText('U')}>U</div>
                <div onClick={() => setText('V')}>V</div>
                <div onClick={() => setText('W')}>W</div>
                <div onClick={() => setText('X')}>X</div>
                <div onClick={() => setText('Y')}>Y</div>
                <div onClick={() => setText('Z')}>Z</div>
              </div>
            </div>
          </div>
          <div className="single-location-search pt-50">
            <div className="row">
              {centers &&
                centers.map((item) => {
                  return (
                    <div className="col-md-6">
                      <div className="location-header">
                        <div className="location-search-flex">
                          <div>
                            <h3> {item.store_name} </h3>
                          </div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-minus-circle"
                            >
                              <circle cx={12} cy={12} r={10} />
                              <line x1={8} y1={12} x2={16} y2={12} />
                            </svg>
                          </div>
                        </div>
                        <div className="open-accordian">
                          <p>{item.store_complete_address}</p>
                          <div className="call-now-button">
                            <a href={`tel:${item.store_contact_number}`}>
                              <div className="icon-with-button">
                                <div>
                                  <span>
                                    <i className="fa fa-phone" />
                                  </span>
                                </div>
                                <div>Call Now </div>
                              </div>
                            </a>
                            <a
                              href={`https://api.whatsapp.com/send?phone=91${item.store_contact_number}&text=Hello%20I%20am%20interested%20in%20car%20wash`}
                            >
                              <div className="icon-with-button">
                                <div>
                                  <span>
                                    <i className="fa fa-whatsapp" />
                                  </span>
                                </div>
                                <div>Whatsapp </div>
                              </div>
                            </a>
                          </div>
                          <Link to={`/store/${item.id}`} className="partner">
                            Partner Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AlphabeticalSearch;
