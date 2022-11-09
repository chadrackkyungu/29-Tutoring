import React from "react"
import { AvForm, AvField } from "availity-reactstrap-validation"
import usePost from "hooks/usePost";
import CustomBtn from "components/CustomBtn";
import { useStore1Selector } from "index";
import { userDetails } from "Redux/Slices/userSlice";
import { CreateCourseMsg } from "components/NotifyMessage";
import { Col, Row } from "reactstrap";

function AddCourse({ reFetch, onClose }) {

    const user = useStore1Selector(userDetails);
    const user_Id = user?.data?.data?._id;
    const token = user?.token;
    const { execute, pending, data } = usePost()

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        const Method = 'POST', endPoint = 'sessions';

        const raw = JSON.stringify({
            "sessionTitle": values.sessionTitle,
            "startTime": values.startTime,
            "startDate": values.startDate,
            "endDate": values.endDate,
            "description": values.description,
            "Tutor": user_Id
        });

        execute(endPoint, raw, Method, CreateCourseMsg, token)
    }

    if (data?.status === "success") {
        onClose;
        setTimeout(() => {
            reFetch()
        }, 2500)
    }

    return (
        <div>
            <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <Row>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="sessionTitle" label="Title" type="text" required placeholder="Title" className="form-control" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mb-3">
                            <AvField name="startTime" label="Start Time" type="time" required className="form-control" />
                        </div>
                    </Col>
                </Row>


                <div className="mb-3">
                    <AvField name="startDate" label="Start Date" type="date" required className="form-control" />
                </div>

                <div className="mb-3">
                    <AvField name="endDate" label="End Date" type="date" className="form-control" required />
                </div>

                <div className="mb-3">
                    <AvField name="description" label="Course Description" type="textarea" rows={5} className="form-control" required />
                </div>

                <CustomBtn Pending={pending} btnName="Submit" />
            </AvForm>
        </div>
    )
}

export default AddCourse