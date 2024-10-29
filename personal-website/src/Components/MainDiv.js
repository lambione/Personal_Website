import React from 'react'

export default function Maindiv() {
    return (
        <div className="w-5/6 m-auto justify-center h-[80vh] inset-0 flex flex-row bg-gray-500 mt-5 rounded-[15px]">
            <div className="w-3/5 p-4 m-auto flex- flex-col">
                <h1 className="font-bold italic text-xl">I AM LAMBERTO RAGNOLINI</h1>
                <p className="text-lg italic">I am a computer scientist student with a background in mathematics given my high school diploma</p>
            </div>
            <div className="w-2/5 mt-auto">
                <img src="/images/NORMAL_FORMAL_removebg.png" alt="foto" className="w-[1/5] object-cover"/>
            </div>
        </div>
    )
}