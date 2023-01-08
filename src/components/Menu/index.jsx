import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Menu = ({ roomId }) => {

    return (
        <div className="bg-[#f4f5fa] grid grid-cols-3 justify-between pt-0">
            {
                //back button
            }
            <Link to="/" className='btn bg-inherit border-none text-[#0584ff] justify-start pt-6 hover:bg-inherit'><FaChevronLeft /></Link>

            {
                //icon and name
            }
            <div className='grid'>
                <div className="pl-1">
                    <div className="grid avatar placeholder justify-center pt-2">
                        <div className="bg-[#959aa5] text-[#ffffff] rounded-full w-12 ">
                            <span>{roomId[0]}</span>
                        </div>
                    </div>
                </div>
                <span className="grid text-[#39393a] pb-3 justify-center">{roomId}</span>
            </div>
        </div >
    )

}

export default Menu;
