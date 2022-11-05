import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Badge, Card, Container } from "reactstrap"
import { Modal } from 'react-bootstrap';
import Layout from "../Layout"
import { useParams } from "react-router-dom";
import useFetch from "hooks/useFecth";
import { useStore1Selector } from "../../index";
import { userDetails } from "../../Redux/Slices/userSlice";
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { HiUsers } from 'react-icons/hi';
import { GrView } from 'react-icons/gr';
import { AiFillCarryOut } from 'react-icons/ai';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsArrowLeft, BsCheckAll } from 'react-icons/bs';
import VisitorsForm from "./components/VisitorsForm";
import CheckInForm from "./components/CheckInForm";
import CheckOutForm from "./components/CheckOutForm";
import VisitorDetails from "./components/VisitorDetails";

const VisitorsPage = () => {

    const { id } = useParams()
    const user = useStore1Selector(userDetails);
    const token = user.token;
    const { data, reFetch } = useFetch(`https://security-check-in.herokuapp.com/api/v1/visitors/${id}/visitors`, token);

    const [secId, setSecId] = useState();
    const [checkOut, setCheckOut] = useState(false);
    const [checkIn, setCheckIn] = useState(false);
    const [addVisitor, setAddVisitor] = useState(false);
    const [ViewDet, setViewDet] = useState(false);

    return (
        <Layout>
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Security Check in and out</title>
                    </MetaTags>


                    <Container fluid>
                        <p>
                            <Link to={`/house-details/${id}`}> <BsArrowLeft /> Back</Link>
                        </p>
                        <button className="mb-4 btn text-white" onClick={() => setAddVisitor(true)}>Add visitors</button>
                        {
                            data <= 0 ? <Loading /> : (
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
                                                    <th className="align-middle">First Name</th>
                                                    <th className="align-middle">Last Name</th>
                                                    <th className="align-middle">ID Number</th>
                                                    <th className="align-middle">Phone Number</th>
                                                    {/* <th className="align-middle">Status</th> */}
                                                    <th className="align-middle">View</th>
                                                    <th className="align-middle">Check In</th>
                                                    {/* <th className="align-middle">Check Out</th> */}
                                                </tr>
                                            </thead>
                                            {
                                                data?.sort().reverse().map((visitor, i) => {
                                                    return (
                                                        <tbody key={i}>
                                                            <tr key={"_tr_" + "key"} >
                                                                <td>
                                                                    <div className="form-check font-size-16">
                                                                        <input type="checkbox" className="form-check-input" id={"id"} />
                                                                        <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>{visitor?.firstName}</td>
                                                                <td>{visitor?.lastName}</td>
                                                                <td>{visitor?.IdNumber}</td>
                                                                <td>{visitor?.phoneNumber}</td>
                                                                {/* <td>{visitor?.status ? <b className="text-info h5"> IN </b> : <b>OUT</b>}</td> */}
                                                                <td>
                                                                    <Badge className="bg-primary cursor-pointer p-2"
                                                                        onClick={() => {
                                                                            setViewDet(true)
                                                                            setSecId(visitor?._id)
                                                                        }}>  View </Badge>
                                                                </td>
                                                                <td>
                                                                    <Badge className="bg-info cursor-pointer p-2"
                                                                        onClick={() => {
                                                                            setCheckIn(true)
                                                                            setSecId(visitor?._id)
                                                                        }}> <AiFillCarryOut /> Check In </Badge>
                                                                </td>
                                                                {/* <td>
                                                                    <Badge className="bg-dark cursor-pointer p-2"
                                                                        onClick={() => {
                                                                            setCheckOut(true)
                                                                            setSecId(visitor?._id)
                                                                        }}> <AiFillCarryOut /> Check Out </Badge>
                                                                </td> */}
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }


                                        </table>
                                    </div>
                                </Card>
                            )
                        }

                        <Modal show={ViewDet} onHide={() => setViewDet(false)} size="md">
                            <Modal.Header>
                                <h3> Add a new visitor </h3>
                            </Modal.Header>

                            <Modal.Body>
                                <VisitorDetails visitorId={secId} token={token} />
                            </Modal.Body>

                            <Modal.Footer>
                                <Badge className="bg-danger p-2" onClick={() => setViewDet(false)}> Cancel </Badge>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={addVisitor} onHide={() => setAddVisitor(false)} size="md">
                            <Modal.Header>
                                <h3> Add a new visitor </h3>
                            </Modal.Header>

                            <Modal.Body>
                                <VisitorsForm reFetch={reFetch} setAddVisitor={setAddVisitor} propId={id} />
                            </Modal.Body>

                            <Modal.Footer>
                                <Badge className="bg-danger p-2" onClick={() => setAddVisitor(false)}> Cancel </Badge>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={checkIn} onHide={() => setCheckIn(false)} size="md">
                            <Modal.Header>
                                <h3> Check in </h3>
                            </Modal.Header>

                            <Modal.Body>
                                <CheckInForm reFetch={reFetch} token={token} visitorId={secId} propId={id} setCheckIn={setCheckIn} />
                            </Modal.Body>

                            <Modal.Footer>
                                <Badge className="bg-danger p-2" onClick={() => setCheckIn(false)}> Cancel </Badge>
                            </Modal.Footer>
                        </Modal>

                        {/* <Modal show={checkOut} onHide={() => setCheckOut(false)} size="md">
                            <Modal.Header>
                                <h3> Check out </h3>
                            </Modal.Header>

                            <Modal.Body>
                                <CheckOutForm reFetch={reFetch} token={token} visitorId={secId} setCheckOut={setCheckOut} />
                            </Modal.Body>

                            <Modal.Footer>
                                <Badge className="bg-danger p-2" onClick={() => setCheckOut(false)}> Cancel </Badge>
                            </Modal.Footer>
                        </Modal> */}

                    </Container>
                </div>
            </React.Fragment>
        </Layout>
    )
}

export default VisitorsPage