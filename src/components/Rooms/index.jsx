import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';

const Rooms = () => {

    return (
        <div className="mockup-phone aspect-[9/19.5] p-0 h-screen bg-[#ffffff]">
            <div className="camera"></div>
            <div className="grid grid-flow-row">
                {chatRooms.map((room) => (
                    <Link className=""
                        to={`/room/${room.id}`}>
                        <div className='grid grid-cols-2'>
                            <div className="grid avatar placeholder pl-2 pt-2">
                                <div className="bg-[#959aa5] text-[#ffffff] rounded-full w-12 ">
                                    <span>{room.title[0]}</span>
                                </div>
                                <div className="grid">
                                    {room.title}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Rooms;
