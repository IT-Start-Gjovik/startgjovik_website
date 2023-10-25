import event from "@/backend/schemas/event";
import Image from "next/image";
import Link from "next/link";
import { split } from "lodash";
import getEnglishMonth from "@/utils/englishMonth";

// Define the props interface for the EventCard component
interface EventProps {
  imageUrl: string;
  title: string;
  date?: string;
  time?: string;
  description: string;
  slug: string;
}

// Define the EventCard component
const EventCard: React.FC<EventProps> = ({
  date,
  title,
  imageUrl,
  time,
  description,
  slug,
}: EventProps) => {
  
  const [monthNum, monthNorwegian] = date ? split(date, ' ') : [null, null];

  const eventDateTime = date && time ? new Date(`${monthNum} ${getEnglishMonth(monthNorwegian)} ${new Date().getFullYear()} ${time}`) : null;
  const currentDateTime = new Date();
const eventFinished = eventDateTime && eventDateTime < currentDateTime;
    
  return (
    <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl max-w-md border-gray-700 bg-gray-800 hover:bg-gray-700">
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
        src={imageUrl}
        alt="Project card"
        width={400}
        height={400}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{description}</p>
        {eventFinished ? (
          // Display this message if the event has finished
          <div>
            <p className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-3 py-2 rounded-lg dark:bg-red-900 dark:text-red-200 inline">
            ⌛️ Arrangementet er over!
          </p>
          </div>
        ) : (
          // Display event date and time if the event is ongoing
          <div>
            <p>📅 {date}</p>
            <p>🕕 {time}</p>

            <Link
          href={`/arrangementer/${slug}`}
          className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Les mer
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default EventCard;
