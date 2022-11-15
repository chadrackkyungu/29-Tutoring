import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import "bootstrap/dist/css/bootstrap.min.css";

const JoinEvent = () => {
    useEffect(() => {
        const apiKey = process.env.REACT_APP_vsdk;
        const meetingId = "milkyway";
        const name = "Jed Kazadi";

        const config = {

            name: name,

            meetingId: meetingId,

            apiKey: apiKey,



            containerId: null,

            redirectOnLeave: "https://www.showbay24.com/",



            micEnabled: true,

            webcamEnabled: true,

            participantCanToggleSelfWebcam: true,

            participantCanToggleSelfMic: true,



            chatEnabled: true,

            screenShareEnabled: true,

            pollEnabled: false,

            whiteboardEnabled: true,

            raiseHandEnabled: true,



            recordingEnabled: true,

            recordingEnabledByDefault: false,

            recordingWebhookUrl: "http://localhost:3000/attendee-dashboard",

            recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path



            brandingEnabled: true,

            brandLogoURL: "https://picsum.photos/200",

            brandName: "Conference",



            participantCanLeave: true, // if false, leave button won't be visible



            livestream: {

                autoStart: true,

                outputs: [

                    // {

                    //   url: "rtmp://x.rtmp.youtube.com/live2",

                    //   streamKey: "<STREAM KEY FROM YOUTUBE>",

                    // },

                ],

            },



            permissions: {

                askToJoin: false, // Ask joined participants for entry in meeting

                toggleParticipantMic: true, // Can toggle other participant's mic

                toggleParticipantWebcam: true, // Can toggle other participant's webcam

                removeParticipant: false, // Remove other participant from meeting

                endMeeting: false, // End meeting for all participant

                drawOnWhiteboard: false, // Can Draw on whiteboard

                toggleWhiteboard: false, // Can toggle whiteboard

                toggleRecording: false, // Can toggle recording

            },



            joinScreen: {

                visible: true, // Show the join screen ?

                // title: "Daily scrum", // Meeting title

                // meetingUrl: window.location.href, // Meeting joining url

            },



            pin: {

                allowed: true, // participant can pin any participant in meeting

                layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR

            },



            leftScreen: {

                // visible when redirect on leave not provieded

                actionButton: {

                    // optional action button

                    label: "Showbay 24", // action button label

                    // href: "https://videosdk.live/", // action button href

                },

            },

        };



        const meeting = new VideoSDKMeeting();

        meeting.init(config);

    }, []);



    return <div></div>;

};

export default JoinEvent;