import { NoSymbolIcon } from "@heroicons/react/20/solid";

export default function NoEvents() {
    return (
    <div className="flex flex-col justify-center items-center">
         <NoSymbolIcon className='fill-[#132D4E] w-48'></NoSymbolIcon>
        <h2 className="text-[#132D4E] text-2xl font-semibold">Ingen kommende Arrangementer...</h2>
    </div>);
}