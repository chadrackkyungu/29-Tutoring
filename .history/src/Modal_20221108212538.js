import React from 'react';
import { Modal } from "react-bootstrap";
import { Button } from "reactstrap";
// import "./Modal.scss"

// const Modal = ({ open, onClose }) => {
//     if (!open) return null;
//     return (
//         <div onClick={onClose} className='overlay'>
//             <div
//                 onClick={(e) => {
//                     e.stopPropagation();
//                 }}
//                 className='modalContainer'
//             >
//                 <div className='modalRight'>
//                     <p className='closeBtn' onClick={onClose}>
//                         X
//                     </p>
//                     <div className='content'>
//                         <p>Do you want a</p>
//                         <h1>$20 CREDIT</h1>
//                         <p>for your first tade?</p>
//                     </div>
//                     <div className='btnContainer'>
//                         <button className='btnPrimary'>
//                             <span className='bold'>YES</span>, I love NFT's
//                         </button>
//                         <button className='btnOutline'>
//                             <span className='bold'>NO</span>, thanks
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;


const ModalComp = ({ open, onClose }) => {

    if (!open) return null;

    return (
        <Modal show={open} onHide={() => onClose} size="lg">
            <h4 className="p-2"> Create a ticket </h4>
            <Modal.Body>
                {/* <OpenTickets id={viewID} propId={propId} userId={userId} /> */}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-end p-2">
                <Button className="bg-danger text-white" onClick={() => onClose}> Cancel </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComp;