import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
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
        <Menu items={menuitems} onClick={(menuitems) => navigate(menuitems.key)}/>
    ) 
};

export default SideMenu;
