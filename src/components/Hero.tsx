import React from "react"
import Image from "next/image"

export const Hero: React.FC = () => {
    return (

        <div className="relative h-full w-full">
            <video className="absolute inset-0 z-1" autoPlay loop>
                <source src="./bg2.mp4" />
                <p>Your browser does not support the video tag.</p>
            </video>
        </div>

    )
}
