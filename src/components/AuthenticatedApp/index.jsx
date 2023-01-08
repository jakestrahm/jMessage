import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatRoom } from '../ChatRoom';
import { chatRooms } from '../../data/chatRooms';
import Rooms from '../Rooms';

function AuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Rooms />} />
                <Route path="/room/:id" element={<ChatRoom />} />
            </Routes>
        </BrowserRouter>
    );
}

export { AuthenticatedApp };
