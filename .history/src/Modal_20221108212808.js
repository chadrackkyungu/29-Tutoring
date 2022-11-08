import React from 'react';
import { Modal } from "react-bootstrap";
import { Button } from "reactstrap";


const ModalComp = ({ open, onClose }) => {

    if (!open) return null;

    return (
        <Modal show={open} onHide={onClose} size="lg">
            <Modal.Header className="d-flex justify-content-end">
                <h4 className="p-2"> Create a ticket </h4>
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