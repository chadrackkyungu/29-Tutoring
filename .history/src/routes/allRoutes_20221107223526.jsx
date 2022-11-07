import React from "react"
import { Redirect } from "react-router-dom"
import { LoginRoute, ForgotPasswordRoute, ResetPasswordRoute, RegisterRoute, VerifyEmailRoute, Dashboard, LogoutRoute, BookMarkRoute, RegisterAsRoute, CourseDetailsRoute, ProfileRoute } from "../components/RouteName"

import Login from "../pages/Authentication/Login"
import Student from "../pages/Authentication/Register"
import Tutor from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"
import Logout from "../pages/Authentication/Logout"
import RegisterAs from "../pages/Authentication/RegisterAs"

import Layout from '../pages/Layout';
import UserProfile from "../pages/Account/Account"
import Courses from "../pages/Courses/Index"
import BookMark from "../pages/BookMark/BookMark"
import CourseDetails from "../pages/Courses/CourseDetails"

const userRoutes = [
  { path: AccountRoute, exact: true, component: Layout },
  { path: ProfileRoute, exact: true, component: UserProfile },
  { path: CourseDetailsRoute, exact: true, component: CourseDetails },
  { path: Dashboard, exact: true, component: Courses },
  { path: BookMarkRoute, exact: true, component: BookMark },
  { path: "*", exact: true, component: () => <Redirect to={Dashboard} /> },
]

const authRoutes = [
  { path: LoginRoute, exact: true, component: Login },
  { path: ForgotPasswordRoute, exact: true, component: ForgetPwd },
  { path: StudentRegRoute, exact: true, component: Student },
  { path: TutorRegRoute, exact: true, component: Tutor },
  { path: ResetPasswordRoute, exact: true, component: ResetPassword },
  { path: VerifyEmailRoute, exact: true, component: VerifiedEmail },
  { path: LogoutRoute, exact: true, component: Logout },
  { path: RegisterAsRoute, exact: true, component: RegisterAs },
]

export { userRoutes, authRoutes }
