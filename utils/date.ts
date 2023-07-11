const getDateTimeFormat = (date: string) => {
    const eventDate: Date = new Date(date);
    const dateFormat: string =
        eventDate.getDay() +
        ". " +
        eventDate.toLocaleString("no-NO", { month: "long" }) +
        " " +
        eventDate.getFullYear().toString();
    const timeFormat: string =
        eventDate.getHours().toString() +
        ":" +
        eventDate.getMinutes().toString();
    return { dateFormat, timeFormat };
};

export default getDateTimeFormat;