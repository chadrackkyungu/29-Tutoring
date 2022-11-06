import React, { useState, useEffect } from 'react'
import { Card, CardBody, Spinner, Badge } from "reactstrap";
import { Modal } from 'react-bootstrap';
import useFetch from "../../../hooks/useFecth";
import { useStore1Selector } from "../../../index";
import { userDetails } from "../../../Redux/Slices/userSlice";
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom';
import { HiUsers } from 'react-icons/hi';
import { GrView } from 'react-icons/gr';
import { AiFillCarryOut } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsCheckAll } from 'react-icons/bs';
import CheckOutForm from './CheckOutForm';


function Visitors({ id }) {

    const user = useStore1Selector(userDetails);
    const token = user.token;
    const { data, reFetch } = useFetch(`https://security-check-in.herokuapp.com/api/v1/checkInOut/${id}/checkIn`, token);

    const [secId, setSecId] = useState(false);
    const [checkOut, setCheckOut] = useState(false);

    if (!data) {
        return <Loading />
    }

    return (
        <div>
            <div className="container mb-3">
                <button className='btn text-white mx-2'> <BsCheckAll /> Daily check in</button>
                {/* <Link to="/#" className='btn text-white mx-2'>  <BsCheckAll /> Weekly check in</Link>
                <Link to="/#" className='btn text-white mx-2'>  <BsCheckAll /> Monthly check in</Link> */}
                <Link className='btn text-white mx-2' to={`/visitors/${id}`}> + Add a new  visitor <HiUsers /> </Link>
            </div>
            <Card>
                <div className="table-responsive p-4">
                    <table className="table align-middle table-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th style={{ width: "20px" }}>
                                    <div className="form-check font-size-16 align-middle">
                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                        <label className="form-check-label" htmlFor="customCheck1"> &nbsp;</label>
                                    </div>
                                </th>
                                <th className="align-middle">Full Name</th>
                                <th className="align-middle">ID Number</th>
                                <th className="align-middle">Phone Number</th>

                                <th className="align-middle">Unit Nm / No</th>
                                <th className="align-middle">Tenant Name</th>
                                <th className="align-middle">Time In & Date </th>
                                <th className="align-middle">IS ?</th>
                                <th className="align-middle">Time Out & Date </th>
                                <th className="align-middle">Check Out </th>
                            </tr>
                        </thead>

                        {
                            data?.sort().reverse().map((check, i) => {
                                const timeIn = check?.checkInDate?.split("T")
                                const timeOut = check?.checkOutDate?.split("T")

                                return (
                                    <tbody key={i}>
                                        <tr key={"_tr_" + "key"} >
                                            <td>
                                                <div className="form-check font-size-16">
                                                    <input type="checkbox" className="form-check-input" id={"id"} />
                                                    <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                                </div>
                                            </td>
                                            <td>{check?.visitorId?.firstName} {check?.visitorId?.lastName}</td>
                                            <td>{check?.visitorId?.IdNumber}</td>
                                            <td>{check?.visitorId?.phoneNumber}</td>

                                            <td>{check?.unitName}</td>
                                            <td>{check?.tenantName}</td>
                                            <td> {timeIn[1].split(".")[0]}  - {timeIn[0]}</td>
                                            <td>{check?.status ? <b className='text-danger h4'> IN </b> : <b className='text-info h4'> OUT </b>}</td>
                                            <td>{timeOut}</td>
                                            {/* <td>{timeOut[1].split(".")[0]} - {timeOut[0]}</td> */}
                                            <td>
                                                <Badge className="bg-info cursor-pointer p-2"
                                                    onClick={() => {
                                                        setCheckOut(true)
                                                        setSecId(check?._id)
                                                    }}>  Check Out </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </Card>

            <Modal show={checkOut} onHide={() => setCheckOut(false)} size="md">
                <Modal.Header>
                    <h3> Check out </h3>
                </Modal.Header>

                <Modal.Body>
                    <CheckOutForm reFetch={reFetch} token={token} visitorId={secId} setCheckOut={setCheckOut} />
                </Modal.Body>

                <Modal.Footer>
                    <Badge className="bg-danger p-2" onClick={() => setCheckOut(false)}> Cancel </Badge>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Visitors