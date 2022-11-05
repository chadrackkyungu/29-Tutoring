import React from 'react'
import { AvField } from "availity-reactstrap-validation"

function ResetForm() {
    return (
        <div>
            <div className="mb-3">
                <AvField
                    name="password"
                    type="password"
                    placeholder="Enter your new password"
                    required
                />
            </div>
            <div className="mb-3">
                <AvField
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirm your password"
                    required
                />
            </div>
        </div>
    )
}

export default ResetForm