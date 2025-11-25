import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { useSelector, useDispatch } from 'react-redux';
import { sendMessageToServer } from "../../socket/socketClient";
import { setCurrentChatId, storeMessage } from "../../store/chatSlice";


export default function InputMessage() {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    let chatId = useSelector((state) => state.currentChatId)

    const sendMessage = () => {
        if (content.trim()) {
            const message = {
                role: 'user',
                content: content.trim()
            };
            if (!chatId) {
                // if no chat id, create a new one
                chatId = uuid();
                dispatch(setCurrentChatId(chatId))
            }

            /// REDUX STORE
            dispatch(storeMessage({ message, chatId }))

            sendMessageToServer({ message, chatId }) /// SOCKET IO
            setContent("")
        } else {
            // Optionally handle empty message case
            console.log('Message content cannot be empty')
        }
    }

    const handleEnterPress = (e) => {
        if (e.key === 'Enter' && content.trim()) {
            sendMessage()
        }
    }

    return (
        <div className="chat_box_panel">
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleEnterPress}
                placeholder="Chat with AI"
                className="chat_box_input"
            />
        </div>
    )
}
