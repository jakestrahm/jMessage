import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import { Tabs } from '../Tabs';
import Menu from '../Menu';

function ChatRoom() {
    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        // TODO 404
    }

    return (
        <div className="mockup-phone aspect-[9/19.5] p-0 ">
            <div className="camera"></div>
            <Tabs active={room.id} />

            <div>
                <Menu roomId={room.id} />
                <MessageList roomId={room.id} />
                <MessageInput roomId={room.id} />
            </div>
        </div>
    );
}

export { ChatRoom };
