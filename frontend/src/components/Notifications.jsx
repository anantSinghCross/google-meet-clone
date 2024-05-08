import { useContext } from "react";
import { SocketContext } from "../Context";

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div className="flex">
                    <h3> {call.name} is calling </h3>
                    <button onClick={answerCall}>
                        Answer Call
                    </button>
                </div>
            )}
        </>
    );
};
export default Notifications;
