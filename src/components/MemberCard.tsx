import React from "react";
import Image from "next/image";
import { Badge } from "@/UI/Badge";

interface Props {
    name: string;
    study: string;
    role: string;
    attributes?: string[];
    description: string;
}

export const MemberCard: React.FC<Props> = ({
    name,
    role,
    study,
    attributes,
    description,
}) => {
    const IMG_SIZE = 600;

    return (
        <div className="flex flex-col items-center rounded-lg border bg-gray-800 shadow-md md:max-w-xl md:flex-row lg:max-w-2xl">
            <Image
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={`/${name.split(" ")[0].toLowerCase()}.JPG`}
                alt={name}
                width={IMG_SIZE}
                height={IMG_SIZE}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <h6 className="mb-1 text-white">{role}</h6>
                <h6 className="mb-1 text-white">{study}</h6>
                <div className="gap-x-19 grid grid-cols-2 gap-y-2 sm:grid-cols-3">
                    {attributes?.map((attribute, index) => {
                        return <Badge key={index} role={attribute} />;
                    })}
                </div>

                <p className="mb-3 mt-4 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
};
