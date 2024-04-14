export const fetchFirstNewsList = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_NEWS_API}`);
    if (!response.ok) {
        throw new Error('Не удалось загрузить список новостей');
    }
    return await response.json();
}

export const fetchNextNewsList = async (id: string) => {
    const response = await fetch(`${import.meta.env.VITE_APP_NEWS_API}?lastSeenId=${id}`);
    if (!response.ok) {
        throw new Error('Не удалось загрузить список новостей');
    }
    return await response.json();
}
