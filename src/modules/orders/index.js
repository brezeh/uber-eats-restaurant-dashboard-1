import orders from '.../.../assets/data/dashboard/orders.json';
import { Card, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate ();

    const renderorderstatus = (orderstatus) => {
        if (orderstatus === 'accepted') {
            return <Tag color={'Green'}>{orderstatus}</Tag>
        }  
        if (orderstatus === 'pending') {
            return <Tag color={'orange'}>{orderstatus}</Tag>
        }  
        if (orderstatus === 'declined') {
            return <Tag color={'red'}>{orderstatus}</Tag>
        }  
    };
    
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
            render: (price) => '${price} $'
        },
        {
            title: 'Status',
            dataindex: 'status',
            key: 'status',
            render: renderorderstatus
        }
    ];
    return (
        <Card title={'Orders'} style={{margin: 20 }}> 
            <table
                datasource={orders}
                columns={tablecoulmns} 
                rowkey="orderID"
                onrow={(orderitem) => ({
                    onclick: () => navigate(`${orderitem.orderID}`)
                })}
            />
        </Card> 
    )
};

export default Orders;
