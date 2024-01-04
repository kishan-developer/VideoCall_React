import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt, zegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';

function Room() {
    const {roomId} = useParams();
    // console.log(roomId);

    const myMeeting = async (element) => {
        const appId = 1924383677;
        const serverSecret = '6fb96aeab24ec5769a83793953a5a010';

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Enter your Name"
            )

            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: element,
                sharedLinks : [{
                    name : 'Copy Link',
                    url : `http://localhost:5173/room/${roomId}`
                }],
                scenario : {
                    mode : ZegoUIKitPrebuilt.OneONoneCall
                },
                showScreenSharingButton : true
            })
    }
  return (
    <div>
        <div className='h-screen' ref={myMeeting} />
    </div>
  )
}

export default Room