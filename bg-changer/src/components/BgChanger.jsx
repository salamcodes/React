import React, { useState } from 'react'

function BgChanger() {
    const [color, setColor] = useState("white")
    return (
        <>
            <div
                style={{
                    backgroundColor: color,
                    
                    height: "100vh"

                }}>
                <div>
                    <button className='px-3 rounded-full bg-red-500 text-white ' onClick={() => setColor("red")}>Red</button>
                    <button className='px-3 rounded-full ' onClick={() => setColor("blue")}>blue</button>
                    <button className='px-3 rounded-full ' onClick={() => setColor("purple")}>purple</button>
                    <button className='px-3 rounded-full ' onClick={() => setColor("olive")}>olive</button>

                </div>

            </div>



        </>
    )
}

export default BgChanger
