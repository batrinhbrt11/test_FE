import React, { ReactNode } from "react";
import {
  DownloadOutlined,
  DollarOutlined,
  RedoOutlined,
  CloseCircleOutlined,
  CalendarOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import type { TabsProps} from 'antd';
import { Tabs, Form, Button } from "antd";
import EstateInfoTab from "./EstateInfoTab";

interface buttonProps {
  id: number,
  name:string,
  icon: ReactNode,
  htmlType?: "submit" | "button" | "reset" ,
  action?: ()=> void;

}
export default function MainLayout() {
  const [form] = Form.useForm();
  const listButton: buttonProps[] = [
    {
      id: 1,
      name: "Phí",
      icon: <DollarOutlined />,
    },
    {
      id: 2,
      name: "Phân giao lại",
      icon: <RedoOutlined />,
    },
    {
      id: 3,
      name: "Từ chối",
      icon: <CloseCircleOutlined />,
    },
    {
      id: 4,
      name: "Y/C bổ sung",
      icon: <FileDoneOutlined />,
    },
    {
      id: 5,
      name: "Lịch hẹn",
      icon: <CalendarOutlined />,
    },
    {
      id: 6,
      name: "Xuất BKS",
      icon: <DownloadOutlined />,
    },
    {
      id: 7,
      name: "Xuất tờ trình",
      icon: <DownloadOutlined />,
    },
    {
      id: 8,
      name: "Lưu",
      icon: null,
      htmlType:"submit"
    },
    {
      id: 9,
      name: "Hoàn Thành KS",
      icon: null,
    },
  ];
  const handleFinish = (values: any) => {
    console.log(values);
  };


  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Kiểm tra hồ sơ',
      children: 'Kiểm tra hồ sơ',

    },
    {
      key: '2',
      label: 'Thông tin tài sản',
      children: <EstateInfoTab />,
    },
    {
      key: '3',
      label: 'Định vị và hình ảnh',
      children: `Định vị và hình ảnh`,
    },
    {
      key: '4',
      label: 'Giá trị tài sản',
      children: `Giá trị tài sản`,
    },
  ];
  return (
    <div className="main-layout">
      <Form form={form} onFinish={handleFinish}>
        <div className="main-header">
          <p>Thông tin hồ sơ</p>
          <div className="button-list">
            {listButton.map((button) => (
              <Button
                key={button.id}
                icon={button.icon}
                style={
                  !button.icon ? { background: "#2862AF", color: "white" } : {}
                }
                htmlType={button.htmlType ? button.htmlType : "button"}
              >
                {button.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="list-tab">
        <Tabs defaultActiveKey="2" items={items}  className="styled-tabs"/>
        </div>
      </Form>
    </div>
  );
}
