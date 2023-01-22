import React from "react"

export const Hero: React.FC = () => {
    return (

        <div className="h-full w-full mb-4">
            <video className="inset-0 z-1" autoPlay loop>
                <source src="./bg2.mp4" />
                <p>Your browser does not support the video tag.</p>
            </video>
        </div>

    )
}
