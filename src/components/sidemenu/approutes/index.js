import DetailedOrder from "../../modules/detailedorder";
import Orders from "../../modules/orders";
import RestaurantMenu from "../../modules/restaurantmenu";
import CreateMenuItem from "../../modules/createmenuitem";
import OrderHistory from "../../modules/orderhistory";
import Settings from "../../modules/settings";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Orders/>}/>
            <Route path="order/:id" element={<DetailedOrder/>}/>
            <Route path="menu" element={<RestaurantMenu/>}/>
            <Route path="menu/create" element={<CreateMenuItem/>}/>
            <Route path="order-history" element={<OrderHistory/>}/>
            <Route path="settings" element={<Settings/>}/>
        </Routes>
    );
};

export default AppRoutes;
