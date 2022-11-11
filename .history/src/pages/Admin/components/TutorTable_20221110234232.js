import useFetch from 'hooks/useFecth';
import { useStore1Selector } from 'index';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, Spinner, Badge } from "reactstrap";
import { userDetails } from 'Redux/Slices/userSlice';

function TutorTable() {

    const user = useStore1Selector(userDetails);
    const token = user.token;
    const { data, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/non-verify-emails`, token);

    const [smExample, setSmExample] = useState(false);
    const [secId, setSecId] = useState();
    const [assign, setAssign] = useState(false);
    const [suspend, setSuspend] = useState(false);
    const [unSuspend, setUnSuspend] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);

    return (
        <CardBody>
            <h4>Students</h4>                <Card className="mt-3">
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
                                <th className="align-middle">Phone Number</th>
                                <th className="align-middle">Email</th>
                                <th className="align-middle">Status</th>
                                <th className="align-middle">View</th>
                                <th className="align-middle">Action</th>
                                <th className="align-middle">Delete</th>
                            </tr>
                        </thead>
                        {
                            data?.map((tutorReq, i) => {
                                return (
                                    <tbody key={i}>
                                        <tr key={"_tr_" + "key"} >
                                            <td>
                                                <div className="form-check font-size-16">
                                                    <input type="checkbox" className="form-check-input" id={"id"} />
                                                    <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                                </div>
                                            </td>
                                            <td>{tutorReq?.firstName}</td>
                                            <td>{tutorReq?.lastName}</td>
                                            <td>{tutorReq?.phoneNumber}</td>
                                            <td>{tutorReq?.email}</td>
                                            <td>{tutorReq?.status ? "Active" : "Suspended"}</td>

                                            <td>
                                                <Link to="/" className="bg-primary text-white cursor-pointer p-2"
                                                    onClick={() => {
                                                        setUnSuspend(true)
                                                        setSecId(tutorReq?._id)
                                                    }}> View </Link>
                                            </td>

                                            {
                                                tutorReq?.status ? (
                                                    <td>
                                                        <Badge className="bg-info cursor-pointer p-2"
                                                            onClick={() => {
                                                                setSuspend(true)
                                                                setSecId(tutorReq?._id)
                                                            }}> Suspend </Badge>
                                                    </td>
                                                ) : (
                                                    <td>
                                                        <Badge className="bg-dark cursor-pointer p-2"
                                                            onClick={() => {
                                                                setUnSuspend(true)
                                                                setSecId(tutorReq?._id)
                                                            }}> Unsuspend </Badge>
                                                    </td>
                                                )
                                            }

                                            <td>
                                                <Badge className="bg-danger cursor-pointer p-2"
                                                    onClick={() => {
                                                        setDeleteUser(true)
                                                        setSecId(tutorReq?._id)
                                                    }}> Delete </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </Card>
        </CardBody>
    )
}

export default TutorTable