export function formatDate(date: Date) {
    const dt = new Date(date);
    const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    const month = dt.getMonth() + 1;

    return `${dt.getDate()}.${(month < 10) ? `0${month}` : month}, ${days[dt.getDay()]}`;
}