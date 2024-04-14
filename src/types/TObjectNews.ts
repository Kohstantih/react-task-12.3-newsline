export type TObjectNews = {
    id: number,
    date: number,
    text: string,
    comments: {
        count: number,
    },
    likes: {
        count: number,
    },
    reposts: {
        count: number,
    },
    views: {
        count: number
    }
}