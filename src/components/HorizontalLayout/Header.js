import React, { useState } from "react"
import "../Styles.scss";
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions"
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import Logo from "../../assets/images/logo-light.png"

const Header = props => {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <Link to="/dashboard" className="logo">
            <img src={""} alt="" />
          </Link>

          <div className="d-flex">
            {/* <NotificationDropdown /> */}
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout
  return { layoutType, showRightSidebar, leftMenu }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})((Header))
