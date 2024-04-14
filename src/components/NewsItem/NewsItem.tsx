import { EyeOutlined, HeartOutlined, ImportOutlined, MessageOutlined } from "@ant-design/icons";
import { Badge, Flex, Space, Divider } from "antd";

import getFormattedDate from "../../funcs/getFormattedDate";
import { TNewsItemProps } from "../../types/TNewsItemProps";

import "./NewsItem.css";

export default function NewsItem({ obj }: TNewsItemProps) {
    const { date, text, comments, likes, reposts, views } = obj;

    return (
        <Flex vertical={true} className="news_item" >
            <div>Дата публикации: <span style={{ fontWeight: 'bold' }}>{getFormattedDate(date)}</span></div>
            <Divider />
                <p style={{overflowX: "hidden"}} >{text}</p>
            <Divider />
            <Flex justify="space-between" style={{ width: "100%", paddingRight: "10px" }}>
                <Space size="large">
                    <Badge count={likes.count} >
                        <HeartOutlined style={{ fontSize: '2em'}} />
                    </Badge>
                    <Badge count={comments.count} >
                        <MessageOutlined style={{ fontSize: '2em'}} />
                    </Badge>
                    <Badge count={reposts.count} >
                        <ImportOutlined style={{ fontSize: '2em'}} />
                    </Badge>
                </Space>
                <Badge count={views.count} >
                    <EyeOutlined style={{ fontSize: '2em'}} />
                </Badge>
            </Flex>
        </Flex>
    )
}
