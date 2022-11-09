import React, { useState, useRef } from "react"
import { Col, Row, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { FcAddImage } from "react-icons/fc";
import usePost from "hooks/usePost";
import CustomBtn from "components/CustomBtn";
import { useStore1Selector } from "index";
import { userDetails } from "Redux/Slices/userSlice";
import { CreateCourseMsg } from "components/NotifyMessage";

function AddCourse({ reFetch, onClose }) {

    const user = useStore1Selector(userDetails);
    const user_Id = user?.data?.data?._id;
    const token = user?.token;
    const refFileUpload = useRef(null);
    const [profileServer, setProfileServer] = useState();
    const [profile, setProfile] = useState();
    const { execute, pending, data } = usePost()

    const onThumbChangeClick = () => {
        if (refFileUpload) {
            refFileUpload.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const changeThumb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        const Method = 'POST', endPoint = 'courses', isJSON = true;

        const formdata = new FormData();
        formdata.append("title", values.subject);
        formdata.append("category", values.category);
        formdata.append("numberOfTopics", values.numberOfTopic);
        formdata.append("imageCover", profileServer);
        formdata.append("level", values.level);
        formdata.append("description", values.description);
        formdata.append("language", values.language);
        formdata.append("urlLink", values.urlLink);
        formdata.append("courseCode", values.courseCode);
        formdata.append("Tutor", user_Id);

        execute(endPoint, formdata, Method, CreateCourseMsg, token, isJSON)
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