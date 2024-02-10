const getDateTimeFormat = (date: string) => {
    const eventDate = new Date(date);

    const formatDate = (date: Date) =>
        `${date.toLocaleString('en-GB', { day: '2-digit', month: '2-digit' })}`;

    const formatTime = (date: Date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const dateFormat = formatDate(eventDate);
    const timeFormat = formatTime(eventDate);

    return { dateFormat, timeFormat };
};

export default getDateTimeFormat;

