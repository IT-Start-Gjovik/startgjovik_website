interface Props{
    title: string,
    formUrl: string,
    status: JoinStatus

}

export enum JoinStatus{
    OPEN, COMING_SOON, CLOSED
}

const getStatusBadge = (status: JoinStatus) =>{
    switch(status){
        case JoinStatus.OPEN:
            return <span className="bg-green-900 min-w-[100px] flex justify-center text-green-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Åpen</span>
        case JoinStatus.CLOSED:
            return <span className="bg-gray-700 min-w-[100px] flex justify-center text-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Lukket</span>
        case JoinStatus.COMING_SOON:
            return <span className="bg-yellow-900 min-w-[80px] flex justify-center text-yellow-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Kommer Snart</span>
    }
}


export default function JoinListElement({formUrl, title, status }:Props) {

    const style = status === JoinStatus.OPEN ? " bg-gray-700 hover:bg-gray-600" : "bg-gray-900 cursor-not-allowed"

    return (
        <li>
            <a href={formUrl} target="_blank" className={"flex items-center p-3 text-white rounded-lg text-base font-bold hover:shadow "+ style}>
                <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
                {getStatusBadge(status)}
            </a>
        </li>
    )
}