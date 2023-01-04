import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tabs } from '../Tabs';
import { ChatRoom } from '../ChatRoom';
import { chatRooms } from '../../data/chatRooms';

function AuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tabs />} />
                <Route path="/room/:id" element={<ChatRoom />} />
            </Routes>
        </BrowserRouter>
    );
}

export { AuthenticatedApp };
