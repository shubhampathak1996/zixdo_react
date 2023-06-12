import React from 'react'
import { Link } from 'react-router-dom';
import { useGetSetting } from '../../shared/hooks/UseSetting'

function Footer({ is_gg_page }) {
    const [setting_data] = useGetSetting()
    const { settings, loading } = setting_data;
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3">
                            <div className="footer-logo">
                                <img src="/assets/images/logo.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-link">
                                <ul>
                                    <li>
                                        <Link to="/contact-us">contact</Link>
                                    </li>
                                    <li><a href="/faq">faq</a></li>
                                    <li>
                                        <Link to="/privacy-policy">privacy policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/refund-policy">refund policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-social">
                                {is_gg_page ? (
                                    <ul>
                                        <li>
                                            <a target='_blank' href={settings && settings.gg_facebook_link}><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                            <a target='_blank' href={settings && settings.gg_instagram_link}><i className="fa fa-instagram" /></a>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul>

                                        <li>
                                            <a target='_blank' href={settings && settings.facebook_link}><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                            <a target='_blank' href={settings && settings.instagram_link}><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                            <a target='_blank' href={settings && settings.twitter_link}><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                            <a target='_blank' href={settings && settings.youtube_link}><i className="fa fa-youtube" /></a>
                                        </li>
                                        <li>
                                            <a target='_blank' href={settings && settings.whatsapp_link}><i className="fa fa-whatsapp" /></a>
                                        </li>

                                    </ul>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* whatsapp footer */}
            <div className="whatsapp-footer">
                <div className="whatsapp-fix">
                    <a href="https://wa.me/919811213124?text=Hi" target="_blank">
                        <img src="/assets/images/whatsapp.png" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer