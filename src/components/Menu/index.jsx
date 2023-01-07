import { FaChevronLeft } from 'react-icons/fa'

const Menu = ({ roomId }) => {

    return (
        <div className="bg-[#f4f5fa] grid grid-cols-3 justify-between">
            {
                //back button
            }
            <button className='btn bg-inherit border-none text-[#0584ff]'><FaChevronLeft /></button>

            {
                //icon and name
            }
            <div className='grid '>
                <div className="grid avatar placeholder">
                    <div className="bg-[#959aa5] text-[#ffffff] rounded-full w-12 ">
                        <span>{roomId[0]}</span>
                    </div>
                    <span className="grid text-[#39393a]">{roomId}</span>
                </div>
            </div>
        </div >
    )

}

export default Menu;
