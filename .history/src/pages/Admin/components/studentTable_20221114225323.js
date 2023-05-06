import useFetch from 'hooks/useFecth';
import { useStore1Selector } from 'index';
import React, { useState } from 'react'
import { Card, CardBody, Badge } from "reactstrap";
import { userDetails } from 'Redux/Slices/userSlice';
import SmallModal from './../../../SmallModal';
import DeleteFormFunc from './DeleteFormFunc';
import UnSuspendFormFunc from './UnSuspendFormFunc';
import SuspendFormFunc from './SuspendFormFunc';
import Loading from 'components/Loading';
import Layout from 'pages/Layout';
import Empty from 'components/Empty';

function StudentTable() {

    const [secId, setSecId] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [Suspend, setSuspend] = useState(false);
    const [UnSuspend, setUnSuspend] = useState(false);
    const user = useStore1Selector(userDetails);
    const token = user.token;
    const { data, reFetch, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/students`, token);
    if (loading) return <Layout> <Loading /> </Layout>

    return (
        <CardBody>
            <h4>Students</h4>
            {
                data.length <= 0 ? <Empty empty="You have no students yet" /> :
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
                                        <th className="align-middle">Status</th>
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
                open={openModal}
                onClose={() => setOpenModal(false)}
                ModalTitle="Are you sure you want to delete this student ?"
                cancel="No"
                CourseForm={<DeleteFormFunc reFetch={reFetch} UserID={secId} onClose={() => setOpenModal(false)} />}
            />

            <SmallModal
                open={Suspend}
                onClose={() => setSuspend(false)}
                ModalTitle="Are you sure you want to suspend this student ?"
                cancel="No"
                CourseForm={<SuspendFormFunc reFetch={reFetch} UserID={secId} onClose={() => setSuspend(false)} />}
            />

            <SmallModal
                open={UnSuspend}
                onClose={() => setUnSuspend(false)}
                ModalTitle="Are you sure you want to unsuspend this student ?"
                cancel="No"
                CourseForm={<UnSuspendFormFunc reFetch={reFetch} UserID={secId} onClose={() => setUnSuspend(false)} />}
            />

        </CardBody>
    )
}

export default StudentTable