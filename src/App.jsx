import React, { useEffect } from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"
import { userRoutes, authRoutes } from "./routes/allRoutes"
import Authmiddleware from "./routes/middleware/Authmiddleware"
import HorizontalLayout from "./components/HorizontalLayout"
import NonAuthLayout from "./components/NonAuthLayout"
import AOS from "aos"
import "aos/dist/aos.css"
import "./assets/scss/theme.scss"

const App = props => {

  return (
    <React.Fragment>
      <Router>
        <Switch>

          {authRoutes.map((route, i) => (
            <Authmiddleware
              path={route.path}
              component={route.component}
              exact={route.exact}
              layout={NonAuthLayout}
              key={i}
            />
          ))}

          {userRoutes.map((route, i) => (
            <Authmiddleware
              path={route.path}
              exact={route.exact}
              component={route.component}
              layout={HorizontalLayout}
              key={i}
            />
          ))}

        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
