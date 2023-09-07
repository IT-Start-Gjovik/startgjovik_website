const getDateTimeFormat = (date: string) => {
    const eventDate: Date = new Date(date);
    const dateFormat: string =
        eventDate.getDate()+
        ". " +
        eventDate.toLocaleString("no-NO", { month: "long" })

    // Event minutes
    let eventMinutes: number | string = eventDate.getMinutes();

    // If it is 0, set it to "00" for fixing the bug
    if(eventMinutes === 0){
        eventMinutes = "00";
    }else if(eventMinutes > 0 && eventMinutes < 10){
        // For minutes that are f.exp :01 to :09
        eventMinutes = "0" + eventMinutes.toString();
    }else{
        // it is 
        eventMinutes.toString();
    }


    const timeFormat: string =
        eventDate.getHours().toString() +
        ":" + eventMinutes;
    return { dateFormat, timeFormat };
};

export default getDateTimeFormat;