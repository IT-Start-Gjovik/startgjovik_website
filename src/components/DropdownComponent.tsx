import Link from 'next/link'
import React from 'react'


interface Props{
    text: string,
    options: string[]
}


export const DropdownComponent: React.FC<Props> = ({text, options}) => {
    return (
        <div className=" lg:max-w-sm ">
            <select className="block py-2 pl-3 pr-4 text-xl text-white rounded bg-transparent md:p-0  hover:text-white hover:underline" >
                <option hidden>{text}</option>
                {options.map((option, index) =>{
                   return <option key={index} onClick={event =>  window.location.href=`/${option.toLowerCase().replace(" ", "-")}`}>{option}</option>
                })}

            </select>
        </div>
    )
}
