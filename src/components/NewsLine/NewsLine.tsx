import { Button, List, Spin } from "antd";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getNewsListFirst, getNewsListNext } from "../../redux/actions/actionCreator";
import NewsItem from "../NewsItem/NewsItem";

import './NewsLine.css';

export default function NewsLine() {
    const {news, isLoading, lastId, isNews} = useAppSelector((state) => state.news);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getNewsListFirst());
    }, [dispatch]);

    return (        
        <List
            className="news_list"
            header={<h2>Лента Новостей</h2>}
            footer={
                <>
                    {isNews &&
                    <Button
                        onClick={() => !isLoading && lastId && dispatch(getNewsListNext(lastId))}
                        style={{width: '200px'}}
                    >
                        {!isLoading && 'к предыдущим записям'}
                        {isLoading && <Spin />}
                    </Button>}
                </>
            }
            bordered
            dataSource={news}
            renderItem={(item) => (
                <List.Item>
                    <NewsItem obj={item} />
                </List.Item>
            )}
        />    
    )
}
