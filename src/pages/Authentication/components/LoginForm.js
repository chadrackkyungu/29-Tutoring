import React from 'react'
import { Row, Col } from "reactstrap"
import { AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"

function LoginForm() {
    return (
        <div>
            <div className="mb-3">
                <AvField
                    name="email"
                    label="Email"
                    className="form-control"
                    placeholder="Enter email"
                    type="email"
                    required
                />
            </div>

            <div className="mb-3">
                <AvField
                    name="password"
                    label="Password"
                    type="password"
                    required
                    placeholder="Enter Password"
                />
            </div>


            {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="customControlInline" />
                <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
            </div> */}

            <div className="col-12 mt-2">
                <Link to="/forgot-password" className='text-success'><i className="mdi mdi-lock"></i> Forgot your password?</Link>
            </div>
        </div>
    )
}

export default LoginForm