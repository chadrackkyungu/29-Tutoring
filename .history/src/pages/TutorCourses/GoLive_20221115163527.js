import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { useParams } from "react-router-dom";
import { useStore1Selector } from "index";
import { userDetails } from './../../Redux/Slices/userSlice';


export default function JoinEvent() {
    const { id } = useParams();
    const user = useStore1Selector(userDetails);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_vsdk;
        const meetingId = `Live-session ${id}`;
        const name = `${user.Name}`;

        const config = {
            name: name,
            meetingId: meetingId,
            apiKey: apiKey,
            region: "sg001",
            containerId: null,
            redirectOnLeave: "https://event.showbay24.com/get-started",
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
                logoURL: "https://app.showbay24.com/Logo/Showbay24.png",
                name: "Conference",
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
                title: "Session",
            },

            leftScreen: {
                actionButton: {
                    label: "Showbay 24", // action button label
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