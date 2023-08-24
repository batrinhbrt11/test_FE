import React from "react";
import { Col, Row, Input, Select, Button } from "antd";
import { StyledFormItem } from "./StyledComponent";
import { PlusOutlined } from "@ant-design/icons";

export default function HopThua() {
  return (
    <div className="form-container">
      <Row gutter={[24, 8]} className="mt-8">
        <Col span={12}>
          <StyledFormItem
            name="kichthuocmattien"
            label="Kích thước mặt tiền (m)"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="HT tính tổng các thửa và cho sửa" />
          </StyledFormItem>
        </Col>
        <Col span={12}>
          <StyledFormItem
            name="kichthuocchieudai"
            label="Kích thước chieu dai (m)"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="HT tính tổng các thửa và cho sửa" />
          </StyledFormItem>
        </Col>
        <Col span={12}>
          <StyledFormItem
            name="dtsdr"
            label="Diện tích sử dụng riêng (m2)"
            rules={[{ required: true, message: "" }]}
          >
            -
          </StyledFormItem>
        </Col>
        <Col span={12}>
          <StyledFormItem
            name="dtsdc"
            label="Diện tích sử dụng chung (m2)"
            rules={[{ required: true, message: "" }]}
          >
            -
          </StyledFormItem>
        </Col>
        <Col span={12}>
          <StyledFormItem
            name="dtsdc"
            label="Diện tích không phù hợp quy hoạch (m2)"
            rules={[{ required: true, message: "" }]}
          >
            -
          </StyledFormItem>
        </Col>
        <Col span={12}>
          <StyledFormItem
            name="dtsdc"
            label="Diện tích phù hợp quy hoạch (m2)"
            rules={[{ required: true, message: "" }]}
          >
            -
          </StyledFormItem>
        </Col>
        <Col span={24}>
          <StyledFormItem
            name="note"
            label="Ghi chú"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Nhập" />
          </StyledFormItem>
        </Col>
      </Row>
    </div>
  );
}
