import React from "react"
import { AvForm, AvField } from "availity-reactstrap-validation"
import usePost from "hooks/usePost";
import CustomBtn from "components/CustomBtn";
import { useStore1Selector } from "index";
import { userDetails } from "Redux/Slices/userSlice";
import { CreateCourseMsg } from "components/NotifyMessage";

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
                <div className="mb-3">
                    <AvField name="subject" label="Subject" type="text" required placeholder="Subject" className="form-control" />
                </div>

                <div className="mb-3">
                    <AvField name="courseCode" label="Course Code" type="text" required placeholder="course code" className="form-control" />
                </div>

                <div className="mb-3">
                    <AvField name="numberOfTopic" label="Number of Topic" type="text" required placeholder="Number of Topic" className="form-control" />
                </div>

                <div className="mb-3">
                    <AvField name="level" label="Level" type="text" className="form-control" placeholder="Level" required />
                </div>

                <div className="mb-3">
                    <AvField name="description" label="Course Description" type="textarea" rows={8} className="form-control" required />
                </div>

                <CustomBtn Pending={pending} btnName="Submit" />
            </AvForm>
        </div>
    )
}

export default AddCourse