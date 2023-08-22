import React from "react";
import "./App.css";
import { Layout } from "antd";
import MainLayout from "./components/MainLayout";

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  backgroundColor: "#F5F5F5",
};

const layoutStyle: React.CSSProperties = {
  marginTop: "72px",
};
function App() {
  return (

      <div className="App">
        <Layout style={layoutStyle}>
          <Sider style={siderStyle}></Sider>
          <Layout style={siderStyle}>
            <MainLayout />
          </Layout>
        </Layout>
      </div>
  );
}

export default App;
