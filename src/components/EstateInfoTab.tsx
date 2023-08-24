import React, { useEffect, useState } from "react";
import { StyledCollapse } from "./StyledComponent";
import { Tabs, Form, FormInstance } from "antd";
import type { TabsProps, CollapseProps } from "antd";
import Land from "./Land";
import CentreLand from "./CentreLand";
import HopThua from "./HopThua";

export default function EstateInfoTab() {
  const [show, setShow] = useState<boolean>(false);

  const showHopThua = (isShow: boolean) => {
    setShow(isShow);
  };

  const tabItems: CollapseProps["items"] = [
    {
      key: "1",
      label: "Đặc điểm thửa đất",
      children: (
        <Form.List name="land">
          {(fields, { add, remove }) => <Land setShow={showHopThua} />}
        </Form.List>
      ),
    },
    {
      key: "2",
      label: "Đất ở tại đô thị",
      children: (
        <Form.List name="centreland">
          {(fields, { add, remove }) => <CentreLand />}
        </Form.List>
      ),
    },
  ];
  const defaultItems: TabsProps["items"] = [
    {
      key: "1",
      label: `SBA.1928192`,
      children: (
        <StyledCollapse
          className="estate-tab-items"
          defaultActiveKey={["1"]}
          ghost
          items={tabItems}
          expandIconPosition="end"
        />
      ),
    },
    {
      key: "2",
      label: `SBA.1827191`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `SBA.1827191`,
      children: `Content of Tab Pane 3`,
    },
  ];
  const [items, setItems] = useState(defaultItems);
  
  useEffect(() => {
    setItems([
      {
        key: "1",
        label: `SBA.1928192`,
        children: (
          <StyledCollapse
            className="estate-tab-items"
            defaultActiveKey={["1"]}
            ghost
            items={show ? [...tabItems,  {
              key: "3",
              label: "Thong tin hợp thửa",
              children: (
                <Form.List name="ttht">
                  {(fields, { add, remove }) => <HopThua />}
                </Form.List>
              ),
            }]: tabItems}
            expandIconPosition="end"
          />
        ),
      },
      {
        key: "2",
        label: `SBA.1827191`,
        children: `Content of Tab Pane 2`,
      },
      {
        key: "3",
        label: `SBA.1827191`,
        children: `Content of Tab Pane 3`,
      },
    ])
  }, [show]);
 
  return (
    <div className="estate-info-container">
      <div className="estate-info-header">
        <div className="info-header-item">
          <p>Mã đề nghị:</p>
          <span>STB.23.235671</span>
        </div>
        <div className="info-header-item">
          <p>Số tờ trình :</p>
          <span>000001/23/BĐS-TD</span>
        </div>
        <div className="info-header-item">
          <p>Thời gian gửi yêu cầu:</p>
          <span>15/08/2023 15:30::00</span>
        </div>
      </div>
      <div className="estate-content-info">
        <StyledCollapse
          collapsible="icon"
          expandIconPosition="end"
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: "Mã tài sản",
              children: <Tabs defaultActiveKey="1" items={items} />,
            },
          ]}
          ghost
        />
      </div>
    </div>
  );
}
