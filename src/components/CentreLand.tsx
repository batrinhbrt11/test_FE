import React from "react";
import { Col, Row, Input, Select,  Button } from "antd";
import { StyledFormItem } from "./StyledComponent";
import { PlusOutlined } from "@ant-design/icons";
import FormList from "./FormList";
export default function CentreLand() {
  const items=[
    {
      name: "dtqh",
      label: "Diện tích phù hợp quy hoạch (m2)",
      require:true
    },
    {
      name: "dtkqh",
      label: "Diện tích không phù hợp quy hoạch (m2)",
      require:true
    },
    {
      name: "dtsdr",
      label: "Diện tích sử dụng riêng (m2)",
      require:true
    },
    {
      name: "dtsdc",
      label: "Diện tích sử dụng chung (m2)",
      require:true
    },
  ]
  return (
    <div className="form-container">
      <Row gutter={[24, 8]} className="mt-8">
        <Col span={12}>
          <StyledFormItem
            name="mucdich"
            label="Mục đích sử dụng đất"
            rules={[{ required: true, message: "" }]}
          >
            <Select defaultValue={"datodothi"}>
              <Select.Option value="datodothi">Đất ở tại đô thị</Select.Option>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </StyledFormItem>
        </Col>
        <Col span={12}>
          <StyledFormItem
            name="nguongoc"
            label="Nguồn gốc sử dụng đất "
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Nhập" />
          </StyledFormItem>
        </Col>
        <Col span={12}>
          <StyledFormItem
            name="thoihan"
            label="Thời hạn sử dụng"
            rules={[{ required: true, message: "" }]}
          >
            <Select placeholder="Chọn">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </StyledFormItem>
        </Col>
      </Row>
      <FormList items={items}/>
      <div className="btn-add mt-8">
      <Button type="primary" style={{ background: "#2862AF", color: "white" }} icon={<PlusOutlined />}  />
      </div>
    </div>
  );
}
