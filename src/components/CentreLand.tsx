import React from "react";
import { Col, Row, Form, Input, Select,  Button } from "antd";
import { StyledFormItem } from "./StyledComponent";
import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";
export default function CentreLand() {
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
      <table className="address-table ">
        <thead>
          <tr>
            <th style={{ width: "32%" }}>
              <p>Đặc điểm</p>
            </th>
            <th style={{ width: "32%" }}>
              <p>HSPL</p>
            </th>
            <th style={{ width: "4%" }}>
              <Button
                style={{ background: "#2862AF", color: "white" }}
                shape="circle"
                icon={<ArrowRightOutlined />}
                size="small"
              />
            </th>
            <th style={{ width: "32%" }}>
              <p>Thực tế</p>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="form-label-item-require">Diện tích khuôn viên (m2)</td>
            <Form.List name="dientichkhuonvien">
              {(fields, { add, remove }) => (
                <>
                  <td>
                    <Form.Item
                      name="HSPL"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="STB nhập và cho sửa" />
                    </Form.Item>
                  </td>
                  <td></td>
                  <td>
                    <Form.Item
                      name="thucte"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="Hệ thống tự nhập và cho sửa" />
                    </Form.Item>
                  </td>
                </>
              )}
            </Form.List>
          </tr>
          <tr>
            <td className="form-label-item-require">Diện tích phù hợp quy hoạch (m2)</td>
            <Form.List name="dientichphqh">
              {(fields, { add, remove }) => (
                <>
                  <td>
                    <Form.Item
                      name="HSPL"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="STB nhập và cho sửa" />
                    </Form.Item>
                  </td>
                  <td></td>
                  <td>
                    <Form.Item
                      name="thucte"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="Hệ thống tự nhập và cho sửa" />
                    </Form.Item>
                  </td>
                </>
              )}
            </Form.List>
          </tr>
          <tr>
            <td className="form-label-item-require">Diện tích không phù hợp quy hoạch (m2)</td>
            <Form.List name="dientichkphqh">
              {(fields, { add, remove }) => (
                <>
                  <td>
                    <Form.Item
                      name="HSPL"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="STB nhập và cho sửa" />
                    </Form.Item>
                  </td>
                  <td></td>
                  <td>
                    <Form.Item
                      name="thucte"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="Hệ thống tự nhập và cho sửa" />
                    </Form.Item>
                  </td>
                </>
              )}
            </Form.List>
          </tr>
          <tr>
            <td className="form-label-item-require">Diện tích sử dụng riêng (m2)</td>
            <Form.List name="dientichsdr">
              {(fields, { add, remove }) => (
                <>
                  <td>
                    <Form.Item
                      name="HSPL"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="STB nhập và cho sửa" />
                    </Form.Item>
                  </td>
                  <td></td>
                  <td>
                    <Form.Item
                      name="thucte"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="Hệ thống tự nhập và cho sửa" />
                    </Form.Item>
                  </td>
                </>
              )}
            </Form.List>
          </tr>
          <tr>
            <td className="form-label-item-require">Diện tích sử dụng chung (m2)</td>
            <Form.List name="dientichsdc">
              {(fields, { add, remove }) => (
                <>
                  <td>
                    <Form.Item
                      name="HSPL"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="STB nhập và cho sửa" />
                    </Form.Item>
                  </td>
                  <td></td>
                  <td>
                    <Form.Item
                      name="thucte"
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="Hệ thống tự nhập và cho sửa" />
                    </Form.Item>
                  </td>
                </>
              )}
            </Form.List>
          </tr>
        </tbody>
      </table>
      <div className="btn-add mt-8">
      <Button type="primary" style={{ background: "#2862AF", color: "white" }} icon={<PlusOutlined />}  />

      </div>
    </div>
  );
}
