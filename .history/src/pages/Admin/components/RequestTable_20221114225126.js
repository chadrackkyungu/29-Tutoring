import Empty from 'components/Empty';
import Loading from 'components/Loading';
import useFetch from 'hooks/useFecth';
import { useStore1Selector } from 'index';
import Layout from 'pages/Layout';
import React, { useState, useEffect } from 'react'
import { Card, CardBody, Spinner, Badge } from "reactstrap";
import { userDetails } from 'Redux/Slices/userSlice';
import SmallModal from './../../../SmallModal';
import ApproveFormFunc from './ApproveFormFunc';
import DeclineFormFunc from './DeclineFormFunc';
import DeleteFormFunc from './DeleteFormFunc';

function RequestTable() {

    const [secId, setSecId] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [approve, setApprove] = useState(false);
    const [decline, setDecline] = useState(false);
    const user = useStore1Selector(userDetails);
    const token = user.token;
    const { data, reFetch, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/non-verify-emails`, token);
    if (loading) return <Layout> <Loading /> </Layout>

    return (
        <CardBody>
            <h4>Requests</h4>
            {
                data.length <= 0 ? <Empty empty="Your have course yet" /> :
                    <Card className="mt-3">
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
                                        <th className="align-middle">Approved</th>
                                        <th className="align-middle">Decline</th>
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

                                                    <td>
                                                        <Badge className="bg-success cursor-pointer p-2"
                                                            onClick={() => {
                                                                setApprove(true)
                                                                setSecId(tutorReq?._id)
                                                            }}> Approved </Badge>
                                                    </td>

                                                    <td>
                                                        <Badge className="bg-info cursor-pointer p-2"
                                                            onClick={() => {
                                                                setDecline(true)
                                                                setSecId(tutorReq?._id)
                                                            }}> decline </Badge>
                                                    </td>

                                                    <td>
                                                        <Badge className="bg-danger cursor-pointer p-2"
                                                            onClick={() => {
                                                                setOpenModal(true)
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
            }

            <SmallModal
                open={approve}
                onClose={() => setApprove(false)}
                ModalTitle="Are you sure you want to approved this tutor ?"
                cancel="No"
                CourseForm={<ApproveFormFunc reFetch={reFetch} UserID={secId} onClose={() => setApprove(false)} />}
            />
            <SmallModal
                open={decline}
                onClose={() => setDecline(false)}
                ModalTitle="Are you sure you want to decline this tutor?"
                cancel="No"
                CourseForm={<DeclineFormFunc reFetch={reFetch} UserID={secId} onClose={() => setDecline(false)} />}
            />
            <SmallModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                ModalTitle="Are you sure you want to delete this user ?"
                cancel="No"
                CourseForm={<DeleteFormFunc reFetch={reFetch} UserID={secId} onClose={() => setOpenModal(false)} />}
            />

        </CardBody>
    )
}

export default RequestTable