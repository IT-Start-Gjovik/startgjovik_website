import Link from 'next/link'
import React from 'react'

interface Props{
    link: string,
    text: string
}

export const BlueButton: React.FC<Props> = ({link, text}) => {
  return (
    <Link href={link} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:text-lg" >{text}</Link>
  )
}
