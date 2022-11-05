import React from "react"
import { Redirect } from "react-router-dom"
import { LoginRoute, ForgotPassword, ResetPassword, Register, VerifyEmail } from "../components/RouteName"

import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"

import Layout from '../pages/Layout';
import UserProfile from "../pages/Account/Index"
import Properties from "../pages/Properties/Index"
import HouseDetails from "../pages/Properties/HouseDetails"
import VisitorsPage from "../pages/Properties/VisitorsPage"

const userRoutes = [
  { path: "/my-account", exact: true, component: Layout },
  { path: "/profile", exact: true, component: UserProfile },
  { path: "/properties", exact: true, component: Properties },
  { path: "/house-details/:id", exact: true, component: HouseDetails },
  { path: "/visitors/:id", exact: true, component: VisitorsPage },
  { path: "*", exact: true, component: () => <Redirect to="/properties" /> },
]

const authRoutes = [
  { path: LoginRoute, exact: true, component: Login },
  { path: ForgotPassword, exact: true, component: ForgetPwd },
  { path: Register, exact: true, component: Register },
  { path: ResetPassword, exact: true, component: ResetPassword },
  { path: VerifyEmail, exact: true, component: VerifiedEmail },
]

export { userRoutes, authRoutes }
