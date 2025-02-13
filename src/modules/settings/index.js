import { Form, Input, Card, Button } from "antd";

const Settings = () => {
    return (
        <Card title="restaurant details" style={{ margin: 20 }}>
            <Form layout="verticle" wrapperCol={{ span: 8 }}>
                <Form.Item label="restaurant name" required>
                    <Input placeholder="enter restaurant name here"/>
                </Form.Item>
                <Form.Item label="restaurant address" required>
                </Form.Item>
                <Form.Item>
                    <Button type="primary">submit</Button>
                </Form.Item>
            </Form>
        </Card>
    )
};

export default Settings;
