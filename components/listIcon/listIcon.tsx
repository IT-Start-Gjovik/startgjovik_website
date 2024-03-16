import { ReactElement} from "react";
interface ListIconProps {
    icon: ReactElement;
    text: string;
    link?: string;
}


export default function ListIcon({icon, text, link}: ListIconProps) {   
    if (link) {
        return (
            <li className="inline-flex mb-4">
                <div className="w-7">
                    {icon}
                </div>
                <a href={link} className="ml-3 hover:underline">{text}</a>
            </li>
        );
    }

    return (
        <li className="inline-flex mb-4">
            <div className="w-7">
                {icon}
            </div>
            <p className="ml-3">{text}</p>
        </li>
    );
}