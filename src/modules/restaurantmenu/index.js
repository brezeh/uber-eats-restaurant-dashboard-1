import { Card, Table, Button } from "antd";
import dishes from '../../assets/data/dishes.json';
import { Link } from 'react-router-dom'

const RestaurantMenu = () => {
    const tablecoulmns = [
        {
            title: "menu item",
            dataindex: "name",
            key: "name",
        },
        {
            title: "price",
            dataindex: 'price',
            key: 'price',
            render: (price) => `${price}`
        },
        {
            title: "action",
            key: 'action',
            render: () => <Button danger>remove</Button>
        },
    ];

    const rendernewitembutton = () => (
        <Link to={'create'}>
            <Button type="primary">new item</Button>
        </Link>
    )

    return (
    <Card title={"menu"} style={{ margin: 20}} extra={rendernewitembutton}>
        <Table dataSource={dishes} columns={tablecoulmns} rowKey="id"/> 
    </Card>
    );
};

export default RestaurantMenu;
