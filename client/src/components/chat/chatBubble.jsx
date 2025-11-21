import { HiUserCircle } from 'react-icons/hi2';
import { RiRobot3Fill } from 'react-icons/ri';


export default function ChatBubble() {
    return (
        <div className='chat_box_container user'>
            <div className='person'>
                <div className='person_avatar'>
                    <HiUserCircle />
                </div>
            </div>

            <div className='chat_box_context'>
                <div className='chat_box_bubble'>
                    <span> hello, this is a fake content </span>
                </div>
            </div>

        </div>
    )
}
