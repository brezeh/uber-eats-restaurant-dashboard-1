import ordersHistory from '../../assets/data/orders-history.json';
import { Card, Table, Tag } from 'antd';

const OrderHistory = () => {
    
    const tablecoulmns = [
        {
            title: 'order ID',
            dataindex: 'orderID',
            key: 'orderID',
        },
        {
            title: 'delivery address',
            dataindex: 'deliveryAddress',
            key: 'deliveryAddress'
        },
        {
            title: 'Price',
            dataindex: 'price',
            key: 'price',
            render: (price) => `$${price} $`,
        },
        {
            title: 'Status',
            dataindex: 'status',
            key: 'status',
            render: (status) => (
            <Tag color={status === 'delivered' ? 'Green' : 'red'}>{status}</Tag>
            ),
        },
    ];
    
    return (
        <Card title={'History Orders'} style={{margin: 20 }}> 
            <Table
                datasource={ordersHistory}
                columns={tablecoulmns} 
                rowkey="orderID"
            />
        </Card> 
    )
};

export default OrderHistory;
