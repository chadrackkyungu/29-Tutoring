import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { Link, useHistory } from "react-router-dom"
import user1 from "../../../assets/images/users/avatar.webp"
import { userDetails, Login } from '../../../Redux/Slices/userSlice'
import { useStore1Selector, useStore1Dispatch } from '../../../index';
import { successMessage, warningMessage } from "../../../components/Toast"

const ProfileMenu = () => {

  const history = useHistory()
  const [menu, setMenu] = useState(false);
  const userDet = useStore1Selector(userDetails);
  const dispatch = useStore1Dispatch();

  const userImg = "https://security-check-in.herokuapp.com/img/users/";
  const pic = userDet?.data?.data?.photo;
  const token = userDet?.token

  const LogoutHandler = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = "";
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://security-check-in.herokuapp.com/api/v1/users/logout", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          dispatch(Login(""));
          successMessage("You have successfully logged out!");
          window.setTimeout(() => {
            history.push("/login");
          })
        }
        if (result.status === 'fail') {
          warningMessage(`Try again something went wrong ${result.message}`);
        }
      })
      .catch(error => {
        warningMessage(`Something went wrong try again ${error.message}`);
      });
  }

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">

        <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
          <img className="rounded-circle header-profile-user" src={!pic ? user1 : `${userImg}${pic}`} alt="" />
          <span className="text-white"> {userDet?.data?.data?.firstName} </span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-end">

          <DropdownItem tag="a">
            <Link to='/profile'>
              <i className="bx bx-user font-size-16 align-middle me-1" />My Account
            </Link>
          </DropdownItem>

          <div className="dropdown-divider" />

          {
            !userDet ? (
              <Link to="/login" className="dropdown-item cursor-pointer">
                <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                <span>Login</span>
              </Link>
            ) : (
              <Link className="dropdown-item cursor-pointer">
                <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                <span onClick={LogoutHandler}>Logout</span>
              </Link>
            )
          }

        </DropdownMenu>

      </Dropdown>
    </React.Fragment>
  )
}

export default ProfileMenu
