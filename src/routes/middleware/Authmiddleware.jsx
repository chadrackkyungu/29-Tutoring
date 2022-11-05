import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom";
import { userDetails } from '../../Redux/Slices/userSlice';
import { useStore1Selector } from '../../index';
import Login from "../../pages/Authentication/Login"

function Authmiddleware({ component: Component, layout: Layout, isAuthProtected, ...rest }) {

  const user_detail = useStore1Selector(userDetails)
  const token = user_detail?.token

  return (
    <Route {...rest}
      render={props => {
        if (!token) {
          return (
            <Login />
          )
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )
}
Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware