import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import Menu from '../Menu';

function ChatRoom() {
    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        // TODO 404
    }

    console.log(chatRooms)

    return (
        <div className="mockup-phone aspect-[9/19.5] p-0 h-screen bg-[#f4f5fa]">
            <div className="camera"></div>
            <div>
                <Menu roomId={room.id} />
                <MessageList roomId={room.id} />
                <MessageInput roomId={room.id} />
            </div>
        </div>
    );
}

export { ChatRoom };
