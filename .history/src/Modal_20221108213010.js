import React from 'react';
import { Modal } from "react-bootstrap";
import { Button } from "reactstrap";


const ModalComp = ({ open, onClose, ModalTitle }) => {

    if (!open) return null;

    return (
        <Modal show={open} onHide={onClose} size="lg">
            <Modal.Header className="d-flex justify-content-center">
                <h2 className="p-2"> {ModalTitle}</h2>
            </Modal.Header>
            <Modal.Body>
                {/* <OpenTickets id={viewID} propId={propId} userId={userId} /> */}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-end p-2">
                <Button className="bg-danger text-white" onClick={onClose}> Cancel </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComp;