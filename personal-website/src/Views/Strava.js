import React from 'react'


export default function Strava() {
    return (
        <>
        <button type="submit" className="rounded-[15px] border-2 border-black m-auto inset-0 justify-center text-center align-center" onClick={()=>callApi()}>STRAVA</button>
        </>
    )
}

function callApi(){
    console.log('ao')
}