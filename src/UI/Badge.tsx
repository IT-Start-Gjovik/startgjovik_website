import { GREEN, RED, YELLOW, BLUE, GRAY, PINK }  from 'constants/colors';
import React from 'react'


interface Props {
    role: string
}


function getStyleFromRole(role: string): React.CSSProperties {
    if (role.toLocaleLowerCase() == "hr") return GREEN;
    if (role.toLocaleLowerCase() == "leder" || role.toLocaleLowerCase() == "leder") return YELLOW;
    if (role.toLocaleLowerCase() == "styre") return GRAY;
    if (role.toLocaleLowerCase() == "it") return RED;
    if (role.toLocaleLowerCase() == "event") return PINK;
    if (role.toLocaleLowerCase() == "podcast") return BLUE;

    return GRAY;
}


function getEmoji(role: string): string {
    if (role.toLocaleLowerCase() == "hr") return "🍀";
    if (role.toLocaleLowerCase() == "leder" || role.toLocaleLowerCase() == "leder") return "🥇";
    if (role.toLocaleLowerCase() == "styre") return "📜";
    if (role.toLocaleLowerCase() == "it") return "💻";
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
        
        <span className='px-4 rounded-xl w-max m-auto' style={getStyleFromRole(role)} >{emoji}{role.toUpperCase()}{emoji}</span>
        
    )
}
