export type TNewsItemProps = {
    obj: {
        date: number,
        text: string,
        comments: { count: number},
        likes: { count: number},
        reposts: { count: number},
        views: { count: number}
    }
}