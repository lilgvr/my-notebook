export function formatDate(date: Date) {
    const dt = new Date(date);
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const month = dt.getMonth() + 1;

    return `${dt.getDate()}.${(month < 10) ? `0${month}` : month}, ${days[dt.getDay()]}`;
}