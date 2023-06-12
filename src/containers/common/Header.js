import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { URI } from '../../domain/constant'
import { useSelectAllCollection } from "../../shared/hooks/UseCollection"
import { useGetSetting } from '../../shared/hooks/UseSetting'


const Header = ({ }) => {

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

    useEffect(() => {
        window.scrollTo(0, 0);
        // setMobilemenudropdown(false);
        // setOpenmenu(false);
    }, [window.location.href]);

    return (
        <div>
            <header className="header page">
                <div id="mySidenav" ref={navMenu} className="sidenav">
                    <a className="closebtn" onClick={() => closeNav()}><i class="fa fa-times" aria-hidden="true"></i></a>


                    <Link to="/bridal">Bridal</Link>
                    <a onClick={ToggleButton} >Collections</a>
                    {
                        all_collections && all_collections.map((item) => {
                            if (!item.hide_on_menu) {
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

                <div className="header-top">
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
        </div>
    )
}

export default Header