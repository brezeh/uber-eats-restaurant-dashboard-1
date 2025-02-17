import { Card, Table, Button } from 'antd';
import dishes from '../../assets/data/dishes.json';
import { Link } from 'react-router-dom';

const RestaurantMenu = () => {
    const tablecoulmns = [
        {
            title: "Menu Item",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`
        },
        {
            title: "Action",
            key: 'action',
            render: () => <Button danger>Remove</Button>,
        }
    ];

    const RenderNewItemButton = () => (
        <Link to={'create'}>
            <Button type="primary">New Item</Button>
        </Link>
    )

    return (
    <Card title={"menu"} style={{ margin: 20}} extra={RenderNewItemButton()}>
        <Table dataSource={dishes} columns={tablecoulmns} rowKey="id" /> 
    </Card>
    );
};

export default RestaurantMenu;
