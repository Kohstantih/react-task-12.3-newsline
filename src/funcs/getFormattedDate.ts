export default function getFormattedDate(timestamp: number) {
    const date = new Date(timestamp);

    const dateDay = date.toLocaleString('ru-RU', { day: '2-digit', month: 'short' });
    const dateTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return `${dateDay} в ${dateTime}`
}
