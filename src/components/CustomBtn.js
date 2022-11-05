import React from 'react';
import { Spinner } from "reactstrap"

function CustomBtn({ Pending, btnName }) {
    return (
        <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
            {!Pending ? <span className="me-2">{btnName}</span> : null}
            {!Pending ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...  </span>}
        </button>
    )
}

export default CustomBtn