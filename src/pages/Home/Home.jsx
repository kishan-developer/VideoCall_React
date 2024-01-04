import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const [value , setValue] = useState('');

    const navigate = useNavigate();

    const handleRoomJoin = useCallback(() => {
        if(!value){
            return alert('Please enter a room Id')
        }

        navigate(`/room/${value}`);
    })


    return (
        <div className='flex justify-center items-center h-screen bg-gray-900'>

            {/* Main div  */}
            <div className="">

                {/* Input And Button  */}
                <div className="input bg-gray-950 px-5 py-6 rounded-xl border border-gray-600 shadow-md">

                    {/* Video calling image  */}
                    <div className="flex justify-center mb-8">

                        {/* Image Tag  */}
                        <img src="https://cdn-icons-png.flaticon.com/128/11104/11104179.png" alt="" className="w-20 border rounded-full border-gray-600" />

                    </div>

                    {/* Input Tag  */}
                    <input value={value} 
                        onChange={(e)=> setValue(e.target.value)}
                    type="text" className='bg-gray-950 rounded-lg border border-gray-600 py-2 px-2 outline-none w-80 lg:w-96 text-lg text-white mb-5' placeholder='Enter Room Code' />

                    {/* Br tag  */}
                    <br />

                    {/* Button Tag  */}
                    <button type='button'
                        onClick={handleRoomJoin}
                        className='bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold px-8 py-5 rounded-lg w-full'
                    >
                        Join Room
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;