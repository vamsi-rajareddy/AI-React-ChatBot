import ChatPanel from "./chat/chatPanel";
import InputMessage from "./bottomPanel/inputMessage";
import SidePanel from "./chat/sidePanel";

export default function MainLayout() {
    return (
        <div className="--dark-theme" id="chat">
            <div className="chat_box">
                <ChatPanel/>
            </div>
            <div className="chat_panel">
                <InputMessage/>
            </div>
            <div className="side_panel">
                <SidePanel/>
            </div>

        </div>
    )
}
