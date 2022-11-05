import React from 'react';
import { Spinner } from "reactstrap"

function CustomBtn({ pending, Icon }) {
    return (
        <button className="btn btn-registration-clr w-md waves-effect waves-light w-100 mt-4" type="submit">
            {!pending ? <span className="me-2">{btnName}</span> : null}
            {!pending ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading... {<Icon />} </span>}
        </button>
    )
}

export default CustomBtn