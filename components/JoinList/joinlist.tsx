import JoinListElement, { JoinStatus } from "./joinlistelement";

export default function JoinList() {
    return (

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                Send en søknad!
            </h5>

            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Våre avdelinger trenger engasjerte studenter til å forme Start Gjøvik. 
                Her er en liste med alle avdelinger som er åpne for nye studenter!
            </p>

            <ul className="my-4 space-y-3">
                <JoinListElement formUrl="#" status={JoinStatus.OPEN} title="IT Verv"/>
                <JoinListElement formUrl="#" status={JoinStatus.COMING_SOON} title="Event Verv" />
                <JoinListElement formUrl="#" status={JoinStatus.CLOSED} title="Sponsor Verv" />
                
            </ul>
            <div>
                <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                    <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Ønsker du å bli med, men usikker hva som passer best? Send en åpen søknad!</a>
            </div>
        </div>

    )
}