import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const sidemenu = () => {
    const navigate = useNavigate();

    const menuitems =[
        {
            key: "/",
            label: 'orders'
        },
        {
            key: "menu",
            label: 'menu'
        },
        {
            key: "order-history",
            label: 'order history'
        },
        {
            key: "settings",
            label: 'settings'
        }
    ];

    return (
        <Menu items={menuitems} onClick={(menuitems) => navigate(menuitem.key)}/>
    ) 
};

export default sidemenu;
