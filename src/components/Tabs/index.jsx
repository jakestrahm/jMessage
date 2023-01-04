import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';

function Tabs({ active }) {
    return (
        <div className='tabs justify-center pt-6'>
            {chatRooms.map((room) => (
                <Link className={['tab',
                    'tab-bordered',
                    active == room.id && 'tab-active'].join(' ')} to={`/room/${room.id}`}>{room.title}</Link>
            ))}
        </div>
    );
}
export { Tabs };
