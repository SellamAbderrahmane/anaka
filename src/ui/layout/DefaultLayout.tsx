import React, { useState } from "react"
import { Button, Layout, Menu } from "antd"
import { MenuOutlined } from "@ant-design/icons"
import Sider from "antd/lib/layout/Sider"

const { Header, Content } = Layout

function DefaultLayout({ children }: any) {
  const [collapsed, setCollapsed] = useState(false)

  function collapsedHander() {
    setCollapsed(!collapsed)
  }

  const AppHeader = (
    <Header>
      <div className="app-header">
        <div className="tigger">
          <Button type="link" size="middle" onClick={collapsedHander}>
            <MenuOutlined />
          </Button>
        </div>
      </div>
    </Header>
  )

  return (
    <>
      <Layout className="app-layout" hasSider>
        <Sider collapsed={collapsed} className="sider" theme="light" trigger={null} collapsible>
          <div className="logo">
            <img
              alt="logo"
              src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
            />
          </div>
          <Menu className="sider-menu">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {AppHeader}
          <Content className="content">{children}</Content>
        </Layout>
      </Layout>
    </>
  )
}

export default DefaultLayout
