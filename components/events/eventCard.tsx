import Image from "next/image";
import Link from "next/link";

// Interface for the event card
interface EventProps{
    imageUrl: string,
    title: string,
    date?: string,
    time?: string,
    description: string
} 

// Event card itself
export default function EventCard({date, title, imageUrl, time, description}: EventProps): JSX.Element {
    
    return (
        <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl max-w-md border-gray-700 bg-gray-800 hover:bg-gray-700">
            <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
                src={imageUrl}
                alt="project card"
                width={400}
                height={400}
            />
            <div className="flex flex-col justify-between p-4 leading-normal"> 
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <h4> 📅 {date}</h4>
                <h4>🕕 {time}</h4>
                <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Les meir
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>

        </div>   
    );
}
