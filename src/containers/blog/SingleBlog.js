import React, { useState, useRef } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { useSingleBlogBySlug } from "../../shared/hooks/UseBlog"
import { URI } from '../../domain/constant'
import { useSingleWebpageBySlug } from "../../shared/hooks/UseWebpage"
import { useSelectAllCollection } from "../../shared/hooks/UseCollection"
import { useGetSetting } from '../../shared/hooks/UseSetting'
import { Link } from 'react-router-dom'


const SingleBlog = ({ match }) => {

    const [data] = useSingleWebpageBySlug(match.params.slug);
    const { webpage, webpage_loading } = data;

    const [setting_data] = useGetSetting()
    const { settings, loading } = setting_data;

    const navMenu = useRef(null)
    const [mobileNav, setMobileNav] = useState(false)
    const openNav = () => {
        navMenu.current.style.width = "100%";
    }

    const closeNav = () => {
        navMenu.current.style.width = "0";
    }

    const [collection_data] = useSelectAllCollection();
    const { all_collections } = collection_data;

    const [showCollection, setShowCollection] = useState(false)

    const ToggleButton = () => {
        return (
            setShowCollection(!showCollection)
        )
    }
    return (
        <div>
            <header className="header page">
                <div id="mySidenav" ref={navMenu} className="sidenav">
                    <a className="closebtn" onClick={() => closeNav()}><i class="fa fa-times" aria-hidden="true"></i></a>

                    <Link to="/bridal">Bridal</Link>
                    <a onClick={ToggleButton} >Collections</a>
                    {
                        all_collections && all_collections.map((item) => {
                            if (item.brand === "Asha Gautam") {
                                return (
                                    showCollection ? (
                                        <Link
                                            to={`/collection/${item.slug}`

                                            }>
                                            <div className="pl-30">{item.name}</div>
                                        </Link>
                                    ) : (
                                        null
                                    )
                                )
                            }
                            return (
                                null
                            )
                        })
                    }
                    <Link to="/gg-about">GG By Asha Gautam</Link>
                    <Link to="/blog">Blogs</Link>
                    <Link to="/press">Press</Link>
                </div>

                <div className="blog-header-top">
                    <div className="main-nav">
                        <div className="logo">
                            <Link to="/">
                                <img src={`${URI}${settings && settings.logo}`} />
                            </Link>
                            <a href="index.html"> </a>
                        </div>
                        <div className="menu-nav-icon">
                            <div className="menu-icon" onClick={() => openNav()}>
                                {/* <img src="./assets/images/menu.png" alt=""> */}
                                <i className="fa fa-bars" aria-hidden="true" />
                            </div>
                        </div>
                        {/* <div class="menu">
<nav>
<input class="hidden" type="checkbox" id="menuToggle" />
<label class="menu-btn" for="menuToggle">
<div class="menu"></div>
<div class="menu"></div>
<div class="menu"></div>
</label>
<div class="">
<ul class="nav-tabs">
<li class="nav-tab"><a href="">Bridal</a></li>
<li class="nav-tab"><a href="">Collections</a></li>
<li class="nav-tab"><a href="">GG by Asha Gautam</a></li>
<li class="nav-tab"><a href="">Press</a></li>
</ul>
</div>
</nav>

<div class="website-breadcrumb">
<div class="breadcrumb-text">
Contact us
</div>
</div>
</div> */}
                    </div>
                </div>
            </header>
            {
                !webpage_loading ? webpage && (
                    <>
                        <section className="single-blog ptb-50">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="text-center">
                                            <h2>{webpage.banner_title} </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {webpage.component_type && webpage.component_type.map((item) => {
                                        return (
                                            <>
                                                <div className={`col-md-${item.cols ? item.cols : 12}`}>
                                                    {item.component_field_type === "image" && (
                                                        <img className="card-img-top" src={`${URI}${item.image}`} alt="Card image cap" />
                                                    )}
                                                    {item.component_field_type === "text" && (
                                                        <div className="single-blog">
                                                            <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
                                                        </div>
                                                    )}

                                                </div>
                                            </>
                                        )
                                    })}

                                </div>

                                {
                                    // <hr />
                                    // <div className="row">
                                    //     <div className="col-md-4">
                                    //         <img className="card-img-top" src="assets/images/bg-red3.jpg" alt="Card image cap" />
                                    //     </div>
                                    //     <div className="col-md-8">
                                    //         <div className="single-blog">
                                    //             <p>
                                    //                 And then as we go deeper into the heart of the lehenga, there is the interplay of fabric and embroideries. When you think of a red-pink bandhani dupatta worn over red lehenga embroidered with dori-moti, it’s a piece of art that won’t leave the imagination. With the use of 3D embroidery, and a play of motifs, the bride can quite literally bring her dream to life and to top it all off; it’s in the colour of passion- Red!
                                    //                 And after all, if there’s any other colour in your heart as a bride, the Indian wedding provides ample occasions to play around with what you desire.
                                    //                 Why us at Asha Gautam are such diehard fans of red is because of our love for all things that stand the test of time. Just like red itself, we too want to bring attires that last forever. And while the bridal lehenga may just be the lease worn ensemble, out of any, we want to give it the best chance. And we believe red gives us that opportunity, to create an heirloom, a treasure and a piece of heritage in cultural of Indian Wedding Fashion
                                    //             </p>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                }
                            </div>
                        </section>
                    </>
                ) : (
                    <div></div>
                )
            }

            <Footer />
        </div>
    )
}

export default SingleBlog