import React from 'react'
import Maindiv from '../Components/MainDiv'


export default function Home() {
        return (
            <div className="flex flex-row m-auto inset-0 justify-center">
                <div className="w-4/12"></div>
                <Maindiv className="w-6/12" />
            </div>
        );
}