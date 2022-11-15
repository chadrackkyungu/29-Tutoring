import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useStore1Selector } from 'index';
import { userDetails } from './../../Redux/Slices/userSlice';
import useFetch from './../../hooks/useFecth';

const JoinEvent = () => {
    const { id } = useParams();

    const userDet = useStore1Selector(userDetails);
    const token = userDet?.token
    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/sessions/${id}`, token);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_vsdk;
        const meetingId = `Live-session ${id}`;
        const name = `${userDet?.data?.data?.firstName}   ${userDet?.data?.data?.lastName}`;

        const config = {
            name: name,
            meetingId: meetingId,
            apiKey: apiKey,
            containerId: null,
            redirectOnLeave: process.env.REACT_APP_REDIRECT_STUDENT_AFTER_MEETING,
            micEnabled: true,
            webcamEnabled: true,
            participantCanToggleSelfWebcam: true,
            participantCanToggleSelfMic: true,
            chatEnabled: true,
            screenShareEnabled: true,
            pollEnabled: false,
            whiteboardEnabled: true,
            raiseHandEnabled: true,
            recordingEnabled: false,
            recordingEnabledByDefault: false,
            recordingWebhookUrl: "http://localhost:3000/attendee-dashboard",
            recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
            brandingEnabled: true,
            brandLogoURL: "https://picsum.photos/200",
            brandName: data?.sessionTitle,
            participantCanLeave: true, // if false, leave button won't be visible
            livestream: {
                autoStart: true,
                outputs: [
                ],
            },
            permissions: {
                askToJoin: false,
                toggleParticipantMic: true,
                toggleParticipantWebcam: true,
                removeParticipant: false,
                endMeeting: false,
                drawOnWhiteboard: false,
                toggleWhiteboard: false,
                toggleRecording: false,
            },
            joinScreen: {
                visible: true, // Show the join screen ?
                title: `Session Title : ${data?.sessionTitle}`
            },
            pin: {
                allowed: true,
                layout: "GRID", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
            },
            leftScreen: {
                actionButton: {
                    label: "Tutoring",
                },
            },
        };
        const meeting = new VideoSDKMeeting();
        meeting.init(config);
    }, []);


    return <div>  </div>;

};

export default JoinEvent;