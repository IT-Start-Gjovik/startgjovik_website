const monthMap = {
    januar: 'January',
    februar: 'February',
    mars: 'March',
    april: 'April',
    mai: 'May',
    juni: 'June',
    juli: 'July',
    august: 'August',
    september: 'September',
    oktober: 'October',
    november: 'November',
    desember: 'December',
};

export default function getEnglishMonth(month: keyof typeof monthMap): string {
  return monthMap[month];
}