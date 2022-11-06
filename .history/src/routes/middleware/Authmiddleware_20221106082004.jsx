import React from "react"
import { Route, Redirect } from "react-router-dom";
import { userDetails } from '../../Redux/Slices/userSlice';
import { useStore1Selector } from '../../index';
import Login from "../../pages/Authentication/Login"
function Authmiddleware({ component: Component, layout: Layout, ...rest }) {
  const user_detail = useStore1Selector(userDetails)
  const token = user_detail?.token

  return (
    <Route {...rest}
      render={props => {
        if (!token && user_detail === "") {
          return <Redirect to="/login" />
        }
        else {
          return <Layout> <Component {...props} /> </Layout>
        }
      }
      }
    />
  );
}


export default Authmiddleware