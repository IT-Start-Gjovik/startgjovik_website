import Link from 'next/link'
import React from 'react'


interface Props{
    text: string,
    options: string[]
}


export const DropdownComponent: React.FC<Props> = ({text, options}) => {
    return (
        <div className=" lg:max-w-sm ">
            <select className="p-2.5 text-white text-xl bg-transparent shadow-sm outline-none appearance-none hover:underline " >
                <option hidden>{text} ↓</option>
                {options.map((option, index) =>{
                   return <option key={index} onClick={event =>  window.location.href=`/${option.toLowerCase().replace(" ", "-")}`}>{option}</option>
                })}

            </select>
        </div>
    )
}
