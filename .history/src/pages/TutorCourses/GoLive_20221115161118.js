import React, { useEffect, useState } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { Link, useParams } from "react-router-dom";
import { useStore1Selector } from "./../../../../index";
import { userdetails } from "../../../../Redux/Slices/userSlice";

export default function JoinEvent() {
    const { sessionID } = useParams();
    const user = useStore1Selector(userdetails);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_VIDEOSDK_API_KEY;
        const meetingId = `Conference ${sessionID}`;
        const name = `${user.Name}`;

        const config = {
            name: name,
            meetingId: meetingId,
            apiKey: apiKey,

            region: "sg001", // region for new meeting

            containerId: null,
            redirectOnLeave: "https://event.showbay24.com/get-started",

            micEnabled: true,
            webcamEnabled: true,
            participantCanToggleSelfWebcam: true,
            participantCanToggleSelfMic: true,
            participantCanLeave: true, // if false, leave button won't be visible

            chatEnabled: true,
            screenShareEnabled: true,
            pollEnabled: true,
            whiteboardEnabled: true,
            raiseHandEnabled: true,

            recording: {
                autoStart: false, // auto start recording on participant joined
                enabled: false,
                webhookUrl: "https://www.videosdk.live/callback",
                awsDirPath: `/meeting-recordings/conference/${meetingId}/`, // automatically save recording in this s3 path
            },

            livestream: {
                autoStart: true,
                enabled: true,
            },

            layout: {
                type: "SPOTLIGHT", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
                priority: "SPEAKER", // "SPEAKER" | "PIN",
                // gridSize: 3,
            },

            branding: {
                enabled: true,
                logoURL: "https://app.showbay24.com/Logo/Showbay24.png",
                name: "Conference",
                poweredBy: false,
            },

            permissions: {
                pin: true,
                askToJoin: false, // Ask joined participants for entry in meeting
                canCreatePoll: true,
                toggleParticipantMic: true, // Can toggle other participant's mic
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
                visible: true, // Show the join screen ?
                title: "Conference", // Meeting title
                // meetingUrl: window.location.href, // Meeting joining url
            },

            leftScreen: {
                // visible when redirect on leave not provieded
                actionButton: {
                    // optional action button
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