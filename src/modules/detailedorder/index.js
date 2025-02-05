import {Card, Description, Divider, List, Button} from 'antd';
import dishes from '.../.../src/assets/data/dashboard/dishes.json';

const detailedorder = () => {
    return (
    <Card title={'Order title'} style={{margin: 20}}>
      <Description bordered column={{lg: 1, md: 1, sm: 1}}>
        <Description.item label='customer'>
          Lukas Grinevicius
        </Description.item>
        <Description.item label='customer address'>
          address 15-29, City, Country
        </Description.item>
      </Description>
      <Divider />
      <List 
        dataSource={dishes}
        renderItem={(dishitem) => (
          <List.Item>
            <div style={{fontWeight: 'bold'}}>{dishitem.name} x{dishitem.quantity}</div>
            <div>${dishitem.price}</div>
          </List.Item> 
        )}
      />
      <Divider />
      <div style={styles.totalsumcontainer}>
        <h2>Total:</h2>
        <h2 style={styles.totalprice}>42.96</h2>
      </div>
      <Divider />
      <div style={styles.Buttonscontainer}>
        <Button block type='danger' size='large' style={styles.Button}>
          decline Order
        </Button>
        <Button block type='primary' size='large' style={styles.Button}>
          accept Order
        </Button>
      </div>
      <Button block type='primary' size='large'>
          food is done!
        </Button>
    </Card>
    )
};

const styles = {
    totalsumcontainer: {
      flexdirection: 'row',
      display: 'flex',
    },
    totalprice: {
      marginleft: 'auto',
      fontWeight: 'bold'
    },
    Buttonscontainer: {
      display: 'flex',
      paddingbottom: 30
    },
    Button: {
      marginright: 20,
      marginleft: 20
    }
  };

export default detailedorder;
