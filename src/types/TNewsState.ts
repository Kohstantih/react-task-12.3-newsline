import { TObjectNews } from "./TObjectNews";

export type TNewsState = {
    news: TObjectNews[],
    isLoading: boolean,
    lastId: null | string,
    isNews: boolean,
}