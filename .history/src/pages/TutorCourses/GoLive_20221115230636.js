import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { useParams } from "react-router-dom";
import { useStore1Selector } from "index";
import { userDetails } from './../../Redux/Slices/userSlice';
import useFetch from './../../hooks/useFecth';


export default function JoinEvent() {
    const { id } = useParams();
    const user = useStore1Selector(userDetails);
    const token = user?.token
    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/sessions/${id}`, token);

    console.log(user)
    console.log(data)

    useEffect(() => {
        const apiKey = process.env.REACT_APP_vsdk;
        const meetingId = `Live-session ${id}`;
        const name = `${data?.Tutor?.firstName}   ${data?.Tutor?.lastName}`;

        const config = {
            name: name,
            meetingId: meetingId,
            apiKey: apiKey,
            region: "sg001",
            containerId: null,
            redirectOnLeave: process.env.REACT_APP_REDIRECT_TUTOR_AFTER_MEETING,
            micEnabled: true,
            webcamEnabled: true,
            participantCanToggleSelfWebcam: true,
            participantCanToggleSelfMic: true,
            participantCanLeave: true,
            chatEnabled: true,
            screenShareEnabled: true,
            pollEnabled: true,
            whiteboardEnabled: true,
            raiseHandEnabled: true,
            recording: {
                autoStart: false,
                enabled: false,
                webhookUrl: "https://www.videosdk.live/callback",
                awsDirPath: `/meeting-recordings/conference/${meetingId}/`,
            },

            livestream: {
                autoStart: true,
                enabled: true,
            },

            layout: {
                type: "SPOTLIGHT",
                priority: "SPEAKER",
            },

            branding: {
                enabled: true,
                logoURL: "https://www.logoarena.com/contestimages/public_new/2707/2252_1367263099_rxtutoring4.jpg",
                name: data?.sessionTitle,
                poweredBy: false,
            },

            permissions: {
                pin: true,
                askToJoin: false,
                canCreatePoll: true,
                toggleParticipantMic: true,
                toggleParticipantWebcam: true, // Can toggle other participant's webcam
                drawOnWhiteboard: true, // Can draw on whiteboard
                toggleWhiteboard: true, // Can toggle whiteboard
                toggleRecording: true, // Can toggle meeting recording
                toggleLivestream: true, //can toggle live stream
                removeParticipant: true, // Can remove participant
                endMeeting: true, // Can end meeting
                changeLayout: true, //can change layout
            },

            joinScreen: {
                visible: true,
                title: `Session Title : ${data?.sessionTitle}`,
            },

            leftScreen: {
                actionButton: {
                    label: "Tutoring", // action button label
                    href: "https://event.showbay24.com/", // action button href
                },
            },
            notificationSoundEnabled: true,
            debug: true, // pop up error during invalid config or netwrok error
            maxResolution: "hd", // "hd" or "sd"
        };

        const meeting = new VideoSDKMeeting();
        meeting.init(config);
    }, []);

    return <div></div>;
}