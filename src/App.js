import DetailedOrder from "./modules/detailedorder";
import Orders from "./modules/orders";
import RestaurantMenu from "./modules/restaurantmenu";
import { Routes, Route } from "react-router-dom";
import { Layout, Image } from "antd";
import SideMenu from "./components/sidemenu";

const {Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{height: "100vh", backgroundColor: 'white'}}>
        <Image 
          src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg" 
          preview={false} 
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<Orders/>}/>
            <Route path="order/:id" element={<DetailedOrder/>}/>
            <Route path="menu" element={<RestaurantMenu/>}/>
          </Routes>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Uber Eats Restaurant Dashboard 2025
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
