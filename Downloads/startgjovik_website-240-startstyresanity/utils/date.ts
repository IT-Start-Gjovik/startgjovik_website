const getDateTimeFormat = (date: string) => {
    const eventDate = new Date(date);

    const formatDate = (date: Date) =>
        `${date.getDate()}. ${date.toLocaleString('no-NO', { month: 'long' })}`;

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

