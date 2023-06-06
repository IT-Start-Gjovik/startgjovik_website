import React from "react";
import Image from "next/image";

// Logo of Start Gjøvik. 
// Uses the one without any background and white text
// (LOGO VERSION 2022)
export default function Logo(){
    return (
        <Image
            alt="Start Logo"
            src={"/images/startLogo.png"}
            className="flex justify-center mx-auto py-20"
            width={700}
            height={200}
        />
    );
};
