import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import "../Styles.scss"
import SimpleBar from "simplebar-react"
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import { withTranslation } from "react-i18next"
import { useStore1Selector } from '../../index';
import { userDetails } from '../../Redux/Slices/userSlice'
import { FaUserTie } from 'react-icons/fa';
import { FcBookmark, FcClapperboard, FcEnteringHeavenAlive, FcReadingEbook } from 'react-icons/fc';
import { MdLiveTv } from "react-icons/md"

const SidebarContent = props => {
    const ref = useRef()

    const userDet = useStore1Selector(userDetails);
    const pic = userDet?.data?.data?.photo;
    const name = userDet?.data?.data?.firstName;
    const role = userDet?.data?.data?.role;
    const userImg = `${process.env.REACT_APP_IMG_API}img/users/`;

    useEffect(() => {
        const pathName = props.location.pathname

        const initMenu = () => {
            new MetisMenu("#side-menu")
            let matchingMenuItem = null
            const ul = document.getElementById("side-menu")
            const items = ul.getElementsByTagName("a")
            for (let i = 0; i < items.length; ++i) {
                if (pathName === items[i].pathname) {
                    matchingMenuItem = items[i]
                    break
                }
            }
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem)
            }
        }
        initMenu()
    }, [props.location.pathname])

    useEffect(() => {
        ref.current.recalculate()
    })

    function scrollElement(item) {
        if (item) {
            const currentPosition = item.offsetTop
            if (currentPosition > window.innerHeight) {
                ref.current.getScrollElement().scrollTop = currentPosition - 300
            }
        }
    }

    function activateParentDropdown(item) {
        item.classList.add("active")
        const parent = item.parentElement
        const parent2El = parent.childNodes[1]
        if (parent2El && parent2El.id !== "side-menu") {
            parent2El.classList.add("mm-show")
        }

        if (parent) {
            parent.classList.add("mm-active")
            const parent2 = parent.parentElement

            if (parent2) {
                parent2.classList.add("mm-show")

                const parent3 = parent2.parentElement

                if (parent3) {
                    parent3.classList.add("mm-active")
                    parent3.childNodes[0].classList.add("mm-active")
                    const parent4 = parent3.parentElement
                    if (parent4) {
                        parent4.classList.add("mm-show")
                        const parent5 = parent4.parentElement
                        if (parent5) {
                            parent5.classList.add("mm-show")
                            parent5.childNodes[0].classList.add("mm-active")
                        }
                    }
                }
            }
            scrollElement(item);
            return false
        }
        scrollElement(item);
        return false
    }

    return (
        <React.Fragment>
            <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
                <div id="sidebar-menu">
                    <div className="sidebar-img-container">
                        <img src={`${userImg}${pic}`} alt="" className="rounded-circle" />
                        <h4 className="mt-2">{name}</h4>
                    </div>
                    <ul className="metismenu list-unstyled mt-5" id="side-menu">
                        <>
                            <li className="menu-title">{props.t("Admin Account")} </li>
                            <li>
                                <Link to="/properties" className="waves-effect">
                                    <FcReadingEbook size={28} className="me-3" />
                                    <span >{props.t("Courses")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="waves-effect">
                                    <FaUserTie size={18} className="me-3" />
                                    <span >{props.t("My profile")}</span>
                                </Link>
                            </li>
                            {
                                role === 'tutor' ? (
                                    <>
                                        <li>
                                            <Link to="/tutor-courses" className="waves-effect">
                                                <FcClapperboard size={24} className="me-3" />
                                                <span >{props.t("My Courses")}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/my-sessions" className="waves-effect">
                                                <MdLiveTv size={24} className="me-3" />
                                                <span >{props.t("Go live")}</span>
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <.>
                                    <li>
                                        <Link to="/my-courses" className="waves-effect">
                                            <FcBookmark size={24} className="me-3" />
                                            <span >{props.t("Book Mark")}</span>
                                        </Link>
                                    </li>
                                    <li>
                                    <Link to="/my-sessions" className="waves-effect">
                                        <MdLiveTv size={24} className="me-3" />
                                        <span >{props.t("Go live")}</span>
                                    </Link>
                                </li>
                                </.
                        )
                            }
                    </>
                </ul>
            </div>
        </SimpleBar>
        </React.Fragment >
    )
}

SidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))