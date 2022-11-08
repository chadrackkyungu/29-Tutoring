import React from 'react';
import { Modal } from "react-bootstrap";
import { Button } from "reactstrap";


const ModalComp = ({ open, onClose, ModalTitle, cancel, deleteBtn, CourseForm }) => {

    if (!open) return null;

    return (
        <Modal show={open} onHide={onClose} size="lg">
            <Modal.Header className="d-flex justify-content-center">
                <h3 className="p-2"> {ModalTitle} </h3>
            </Modal.Header>
            <Modal.Body>
                {CourseForm}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-end p-2">
                <Button className="btn btn-danger text-white" onClick={onClose}> {cancel} </Button>
                {
                    !deleteBtn ? null : (
                        <Button className="btn btn-danger text-white" onClick={onClose}> {deleteBtn} </Button>
                    )
                }
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComp;