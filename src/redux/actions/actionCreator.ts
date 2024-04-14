import {
    GET_NEWS_FIRST_LIST,
    GET_NEWS_NEXT
} from './actionTypes'

export const getNewsListFirst = () => ({
    type: GET_NEWS_FIRST_LIST
})

export const getNewsListNext = (id: string) => ({
type: GET_NEWS_NEXT,
payload: id,
})
