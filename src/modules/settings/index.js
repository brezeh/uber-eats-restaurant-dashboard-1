import React, { useState } from "react";
import { Form, Input, Card, Button } from "antd";
import GooglePlacesAutocomplete, {
    geocodeByAddress, 
    getLatLng,
} from "react-google-places-autocomplete";

const Settings = () => {
    const [address, setAddress] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    const GetAddressLatLng = async (address) => {
        setAddress(address);
        const GeocodedByAddress = await geocodeByAddress(address.label);
        const Latlng = await getLatLng(GeocodedByAddress[0]);
        setCoordinates(Latlng);
    };

    return (
        <Card title="restaurant details" style={{ margin: 20 }}>
            <Form layout="vertical" wrapperCol={{ span: 8 }}>
                <Form.Item label="restaurant name" required>
                    <Input placeholder="enter restaurant name here"/>
                </Form.Item>
                <Form.Item label="restaurant address" required>
                    <GooglePlacesAutocomplete 
                        apiKey="AIzaSyDgO43l_l0u8AbKExsDjwdXi7DUGG1rNY4" 
                        selectProps={{
                            value: address,
                            onChange: GetAddressLatLng,
                        }}
                        />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">submit</Button>
                </Form.Item>
            </Form>
            <span>{coordinates?.lat} - {coordinates?.lng}</span>
        </Card>
    );
};

export default Settings;
