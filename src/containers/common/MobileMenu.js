import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelectAllMenu } from "../../shared/hooks/UseMenu";


function MobileMenu({ openmenu, setOpenmenu }) {
    const [menu_data] = useSelectAllMenu();

    const [activeMenu, setActiveMenu] = useState(null);
    const [mobilemenudropdown, setMobilemenudropdown] = useState(false)
    const { all_menus, all_menus_loading } = menu_data;


    const [mobileSubMenuDropdown, setMobileSubMenuDropdown] = useState(null)
    const [mobileSubSubMenu, setMobileSubSubMenu] = useState(null)


    useEffect(() => {
        if (all_menus && all_menus[0] && all_menus[0].fields) {
            setActiveMenu(JSON.parse(all_menus[0].fields));
        }
    }, [all_menus]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // setMobilemenudropdown(false);
        setOpenmenu(false)
    }, [window.location.href]);


    return (
        <div>
            <div className="mobile-menu-bottom">
                {/* Start Mobile Menu Nav */}

                <div className="offcanvas-menu mobile-menu-icon-2">
                    <ul>
                        {activeMenu && activeMenu.map((menu, menu_index) => {
                            return (
                                <li >
                                    <div className='d-flex justify-content-between'>
                                        {menu.data && menu.data.link && menu.data.menu && menu.data.menu.length === 0 ? (
                                            <Link to={`/${menu.data.link}`}>
                                                {" "}
                                                {menu.data && menu.data.title}

                                            </Link>
                                        ) : (
                                            <a onClick={() => {
                                                setMobilemenudropdown(mobilemenudropdown === menu_index + 1 ? null : menu_index + 1)
                                            }}>
                                                {menu.data && menu.data.title}

                                            </a>
                                        )}
                                        <i
                                            onClick={() => {
                                                setMobilemenudropdown(mobilemenudropdown === menu_index + 1 ? null : menu_index + 1)
                                            }}
                                            className={
                                                mobilemenudropdown === menu_index + 1
                                                    ? 'fa fa-angle-down angl'
                                                    : 'fa fa-angle-right angl'
                                            }
                                        ></i>
                                    </div>
                                    {menu.data &&
                                        menu.data.menu &&
                                        menu.data.menu.length > 0 && (
                                            <div className="" style={{
                                                display: mobilemenudropdown === menu_index + 1 ? 'block' : 'none',
                                            }}>
                                                <ul className="">
                                                    {/* Mega Menu Sub Link */}
                                                    {menu.data.menu.map((sub_menu, sub_menu_index) => {
                                                        return (
                                                            <li className="mega-menu-item">
                                                                <div className='d-flex justify-content-between'>
                                                                    {sub_menu.data &&
                                                                        sub_menu.data.link && sub_menu.data.menu.length === 0 ? (
                                                                        <Link
                                                                            to={`/${sub_menu.data.link}`}
                                                                            className="mega-menu-item-title"
                                                                        >
                                                                            {" "}
                                                                            {sub_menu.data &&
                                                                                sub_menu.data.title}

                                                                        </Link>
                                                                    ) : (
                                                                        <a
                                                                            onClick={() => {
                                                                                setMobileSubSubMenu(mobileSubSubMenu === sub_menu_index + 1 ? null : sub_menu_index + 1);
                                                                            }}
                                                                            className="mega-menu-item-title"
                                                                        >
                                                                            {sub_menu.data &&
                                                                                sub_menu.data.title}
                                                                        </a>
                                                                    )}
                                                                    <i
                                                                        onClick={() => {
                                                                            setMobileSubSubMenu(mobileSubSubMenu === sub_menu_index + 1 ? null : sub_menu_index + 1);
                                                                        }}
                                                                        className={
                                                                            mobileSubSubMenu === sub_menu_index + 1
                                                                                ? 'fa fa-angle-down angl'
                                                                                : 'fa fa-angle-right angl'
                                                                        }
                                                                    ></i>
                                                                </div>

                                                                {sub_menu.data &&
                                                                    sub_menu.data.menu &&
                                                                    sub_menu.data.menu.length > 0 && (
                                                                        <ul className="mega-menu-sub" style={{
                                                                            display: mobileSubSubMenu === sub_menu_index + 1 ? 'block' : 'none',
                                                                        }}>
                                                                            {sub_menu.data.menu.map(
                                                                                (sub_sub_menu) => {
                                                                                    return (
                                                                                        <li>
                                                                                            {sub_sub_menu.data &&
                                                                                                sub_sub_menu.data
                                                                                                    .link ? (
                                                                                                <Link
                                                                                                    to={`/${sub_sub_menu.data.link}`}
                                                                                                >
                                                                                                    {" "}
                                                                                                    {sub_sub_menu.data &&
                                                                                                        sub_sub_menu
                                                                                                            .data.title}
                                                                                                </Link>
                                                                                            ) : (
                                                                                                <a href="#">
                                                                                                    {sub_sub_menu.data &&
                                                                                                        sub_sub_menu
                                                                                                            .data.title}
                                                                                                </a>
                                                                                            )}
                                                                                        </li>
                                                                                    );
                                                                                }
                                                                            )}
                                                                        </ul>
                                                                    )}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        )}
                                </li>
                            )
                        })}


                    </ul>
                </div>
                {/* End Mobile Menu Nav */}
                {/* Mobile Manu Mail Address */}
                <a
                    className="mobile-menu-email icon-text-end"
                    href="mailto:info@pgxpitstop.com"
                >
                    <i className="fa fa-envelope-o"> info@pgxpitstop.com</i>
                </a>
                {/* Mobile Manu Social Link */}
                <ul className="mobile-menu-social">
                    <li>
                        <a href="https://www.facebook.com/pgxpitstop" target="_blank" className="facebook">
                            <i className="fa fa-facebook" />
                        </a>
                    </li>
                    {
                        // <li>
                        //     <a href="" className="twitter">
                        //         <i className="fa fa-twitter" />
                        //     </a>
                        // </li>
                    }
                    <li>
                        <a href="https://www.youtube.com/@pgxautoaccessories4893" target="_blank" className="youtube">
                            <i className="fa fa-youtube" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/pgxpitstop/?hl=en" target="_blank" className="instagram">
                            <i className="fa fa-instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu