import React from "react"
import { Redirect } from "react-router-dom"
import { LoginRoute, ForgotPasswordRoute, ResetPasswordRoute, RegisterRoute, VerifyEmailRoute, Dashboard, LogoutRoute, BookMarkRoute } from "../components/RouteName"

import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"
import Logout from "../pages/Authentication/Logout"

import Layout from '../pages/Layout';
import UserProfile from "../pages/Account/Account"
import Courses from "../pages/Courses/Index"
import BookMark from "../pages/BookMark/BookMark"

import CourseDetails from "../pages/Courses/CourseDetails"

const userRoutes = [
  { path: "/my-account", exact: true, component: Layout },
  { path: "/profile", exact: true, component: UserProfile },
  { path: Dashboard, exact: true, component: Courses },
  { path: BookMarkRoute, exact: true, component: BookMark },
  { path: "/course-details/:id", exact: true, component: CourseDetails },
  { path: "*", exact: true, component: () => <Redirect to={Dashboard} /> },
]

const authRoutes = [
  { path: LoginRoute, exact: true, component: Login },
  { path: ForgotPasswordRoute, exact: true, component: ForgetPwd },
  { path: RegisterRoute, exact: true, component: Register },
  { path: ResetPasswordRoute, exact: true, component: ResetPassword },
  { path: VerifyEmailRoute, exact: true, component: VerifiedEmail },
  { path: LogoutRoute, exact: true, component: Logout },
]

export { userRoutes, authRoutes }
