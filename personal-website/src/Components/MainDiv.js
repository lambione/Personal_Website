import React from 'react'

export default function Maindiv() {
    return (
        <div className="w-5/6 m-auto justify-center h-[30vh] mt-[10%]  inset-0 flex flex-row bg-gradient-to-r from-gray-400 to-black rounded-[15px]">
            <div className="w-3/5 m-auto p-4 flex- flex-col">
                <h1 className="font-bold italic text-xl">I AM LAMBERTO RAGNOLINI</h1>
                <p className="text-lg italic">I am a computer scientist student with a background in mathematics given my high school diploma</p>
            </div>
            <div className="w-2/5 mt-[-13%] bottom-2">
                <img src="/images/NORMAL_FORMAL_removebg.png" alt="foto" className="w-[1/5] object-cover"/>
            </div>
        </div>
    )
}