type Props = {
    params: {eventPage: string }

}

export default function EventPage({params}:Props){

    const slug = params.eventPage; 


    return <div>siden til {slug}</div>
}