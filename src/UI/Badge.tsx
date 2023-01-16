import { emit } from 'process';
import React from 'react'


interface Props {
    role: string
}


function getStyleFromRole(role: string): string {
    if (role.toLocaleLowerCase() == "hr") return "bg-green-100 text-green-800";
    if (role.toLocaleLowerCase() == "leder" || role.toLocaleLowerCase() == "leder") return "bg-yellow-100 text-yellow-80";
    if (role.toLocaleLowerCase() == "styre") return "bg-gray-100 text-gray-800";
    if (role.toLocaleLowerCase() == "it") return "bg-red-100 text-red-800";
    if (role.toLocaleLowerCase() == "event") return "bg-purple-100 text-purple-800";
    if (role.toLocaleLowerCase() == "podcast") return "bg-blue-100 text-blue-800";

    return "J";
}


function getEmoji(role: string): string {
    if (role.toLocaleLowerCase() == "hr") return "🍀";
    if (role.toLocaleLowerCase() == "leder" || role.toLocaleLowerCase() == "leder") return "🥇";
    if (role.toLocaleLowerCase() == "styre") return "📜";
    if (role.toLocaleLowerCase() == "it") return "👨‍💻";
    if (role.toLocaleLowerCase() == "event") return "📅";
    if (role.toLocaleLowerCase() == "podcast") return "🔉";

    return "";
}

function getStyle(role: string): string {
    return getStyleFromRole(role) + " text-xs font-medium mr-2 px-2.5 py-0.5 rounded ";
}



export const Badge: React.FC<Props> = ({ role }) => {
    const emoji = getEmoji(role);

    return (
        <span className="bg-red-600 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">{emoji}{role.toUpperCase()}{emoji}</span>
    )
}
