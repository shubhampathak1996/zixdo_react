import React from 'react'
import Banner from '../banner/Banner'
import Footer from '../common/Footer'
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <div>
            <Banner Banner_title={"FAQ"}
                Banner_desktop_img={"assets/images/210310-8-170.jpg"}
                Banner_mobile_img={"assets/images/210310-8-170_mobilebanner.jpg"} />
            <section className="faq pt-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 mx-auto">
                            <h2>Frequently Asked Questions -</h2>

                            <div className="faq-heading-text">
                                <h3>Frequently asked questions have been answered below. For further inquiries, reach out to our </h3>

                                <p>Fashion Consultant at
                                    <a href='tel:9811213124'>9811213124</a>
                                </p>
                            </div>

                        </div>
                        <div className="col-ms-12">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> Q1. HOW LONG WILL MY ORDER TAKE?</Accordion.Header>
                                    <Accordion.Body>
                                        Ans. From payment to delivery, the process may take anywhere between 12 and 16 weeks for bridal dresses and 4 to 12 weeks for others.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Q2. HOW DO I PAY?</Accordion.Header>
                                    <Accordion.Body>
                                        Ans. We have multiple payment options. once you have been in touch with our consultant and finalised the garment, you can pay online via Bank Transfer .
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> Q3. WHAT IS THE PAYMENT PROCESS?</Accordion.Header>
                                    <Accordion.Body>
                                        Ans. We require 100% down payment to confirm your order. The balance is payable when your outfit is ready before delivery. Cash on Delivery service is not available.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Q4. Do you ship domestically and internationally?</Accordion.Header>
                                    <Accordion.Body>
                                        Ans. Yes, we ship worldwide, however there is a nominal charge for international deliveries depending on the volumetric weight of the parcel.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Q5. Can I change/cancel or update my order?</Accordion.Header>
                                    <Accordion.Body>
                                        Ans. Yes, you can change your order only within 24 hours.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Q6. I PLACED AN ORDER ONLINE, WHAT’S NEXT?</Accordion.Header>
                                    <Accordion.Body>
                                        Ans. Our sales consultant will get in touch with you through WhatsApp and/or email to ensure everything is in order.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Q7. CAN I CUSTOMIZE MY ORDER?</Accordion.Header>
                                    <Accordion.Body>
                                        Ans. Yes. Selected customization options are available.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Q8. I HAVE MORE QUESTIONS.</Accordion.Header>
                                    <Accordion.Body>
                                        Ans. If you have any further questions, please talk to our support team on WhatsApp on 9811213124.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Faq
