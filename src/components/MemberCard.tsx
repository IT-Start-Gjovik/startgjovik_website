import React from 'react'
import Image from 'next/image'
import { Badge } from '@/UI/Badge';

interface Props {
    name: string,
    study: string,
    role: string,
    attributes?: string[],
    description: string,

}

export const MemberCard: React.FC<Props> = ({ name, role, study, attributes, description}) => {

    const imgSize = 600;

    return (

        <div className="flex flex-col items-center bg-gray-800 border rounded-lg shadow-md md:flex-row md:max-w-xl lg:max-w-2xl">
            <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`/${name.toLowerCase()}.JPG`} alt={name} width={imgSize} height={imgSize} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <h6 className='mb-1 text-white'>{role}</h6>
                <h6 className='mb-1 text-white'>{study}</h6>
                <div className='grid grid-cols-2 gap-x-19 gap-y-2 sm:grid-cols-3'>
                   {attributes?.map( (attribute, index) =>{
                    return (<Badge key={index} role={attribute} />)
                    })} 
                </div>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">{description}</p>
            </div>
        </div>

    )
}
