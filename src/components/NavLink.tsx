import Link from 'next/link'
import React from 'react'

interface Props{
    text: string,
    link: string,
}

export const NavLink:React.FC<Props> = ({link, text}) => {
  return (
    <li>
        <Link href={link} className="block py-2 pl-3 pr-4 text-xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  hover:text-white" aria-current="page">{text}</Link>
    </li>
  )
}
