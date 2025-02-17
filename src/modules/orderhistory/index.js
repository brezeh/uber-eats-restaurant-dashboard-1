import ordersHistory from '../../assets/data/orders-history.json';
import { Card, Table, Tag } from 'antd';

const OrderHistory = () => {
    
    const tablecoulmns = [
        {
            title: 'Order ID',
            dataIndex: 'orderID',
            key: 'orderID',
        },
        {
            title: 'Delivery Address',
            dataIndex: 'deliveryAddress',
            key: 'deliveryAddress'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
            <Tag color={status === 'Delivered' ? 'Green' : 'red'}>{status}</Tag>
            ),
        },
    ];
    
    return (
        <Card title={'History Orders'} style={{margin: 20 }}> 
            <Table
                dataSource={ordersHistory}
                columns={tablecoulmns} 
                rowKey="orderID"
            />
        </Card> 
    )
};

export default OrderHistory;
