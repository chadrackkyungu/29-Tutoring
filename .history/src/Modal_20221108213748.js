import React from 'react';
import { Modal } from "react-bootstrap";
import { Button } from "reactstrap";


const ModalComp = ({ open, onClose, ModalTitle, cancel }) => {

    if (!open) return null;

    return (
        <Modal show={open} onHide={onClose} size="lg">
            <Modal.Header className="d-flex justify-content-center">
                <h3 className="p-2"> {ModalTitle} </h3>
            </Modal.Header>
            <Modal.Body>
                {/* <OpenTickets id={viewID} propId={propId} userId={userId} /> */}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-end p-2">
                <button className="btn btn-danger text-white" onClick={onClose}> {cancel} </button>
                <button className="btn btn-danger text-white" onClick={onClose}> Cancel </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComp;