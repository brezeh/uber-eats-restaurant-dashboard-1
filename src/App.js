import detailedorder from "./modules/detailedorder";
import Orders from "./modules/detailedorder/orders";
import { Routes, Route } from "react-router-dom";
import { Layout, Image } from "antd";
import sidemenu from "./components/sidemenu";

const {Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{height: "100vh", backgroundColor: 'white'}}>
        <Image 
          src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg" 
          preview={false} 
        />
        <sidemenu />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<Orders />}/>
            <Route path="order/:id" element={<detailedorder />}/>
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
