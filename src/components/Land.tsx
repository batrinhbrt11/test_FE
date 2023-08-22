import React, {  useState } from "react";
import {
  Col,
  Row,
  Form,
  Radio,
  Input,
  Select,
  Space,
  Tabs,
} from "antd";
import { StyledFormItem } from "./StyledComponent";
import FormList from "./FormList";
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
const initialItems = [
  {
    label: "Thửa đất 1",
    children: <DefaultTabLand formListName="1" />,
    key: "1",
  },
];
export default function Land() {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const tmp = Number(activeKey) + 1;
    const newActiveKey = tmp.toString();
    const newPanes = [...items];
    newPanes.push({
      label: `Thửa đất ${newActiveKey}`,
      children: <DefaultTabLand formListName={newActiveKey} />,
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    if(targetKey==="1"){
      return null;
    }
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <div className="form-container">
      <Row className="mt-8">
        <Col>
          <Form.Item label="Hợp thửa" name="hopthua">
            <Radio.Group>
              <Radio value="1"> Có</Radio>
              <Radio value="0"> Không </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
        className="land-tab"
      />
    </div>
  );
}
interface DefaultTabLandProps {
  formListName: string;
}
function DefaultTabLand(props: DefaultTabLandProps) {
  const items=[
    {
      name: "huongchinh",
      label: "Hướng chính"
  
    },
    {
      name: "hinhdang",
      label: "Hình dạng",
      require:true
    },
    {
      name: "somattien",
      label: "Số mặt tiền/mặt thoáng",
      require:true
    },
    {
      name: "ktmt",
      label: "Kích thước mặt tiền (m)",
      require:true
    },
    {
      name: "ktcd",
      label: "Kích thước chiều dài (m)",
      require:true
    },
    {
      name: "dtkv",
      label: "Diện tích khuôn viên (m2)",
      require:true
    },
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
    <Form.List name={props.formListName}>
      {(fields, { add, remove }) => (
        <div className="form-container">
          <Row gutter={[24, 8]} className="mt-8">
            <Col span={12}>
              <Form.Item
                name="sothua"
                label="Số thửa"
                rules={[{ required: true, message: "" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="sotobando"
                label="Số tờ bản đồ"
                rules={[{ required: true, message: "" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <table className="address-table ">
            <thead>
              <tr>
                <th>
                  <p>Địa chỉ tài sản</p>
                </th>
                <th>
                  <p>Tỉnh/Thành phố</p>
                </th>
                <th>
                  <p>Quận/Huyện/Thị xã</p>
                </th>
                <th>
                  <p>Xã/Phường/Thị trấn</p>
                </th>
                <th>
                  <p>Đường phố</p>
                </th>
                <th>
                  <p>Chi tiết</p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="form-label-item-require">Hồ sơ pháp lý </td>
                <Form.List name="hosophaply">
                  {(fields, { add, remove }) => (
                    <>
                      <td>
                        <Form.Item
                          name="tinh"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                      </td>
                      <td>
                        <Form.Item
                          name="quan"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                      </td>
                      <td>
                        <Form.Item
                          name="xa"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                      </td>
                      <td>
                        <Form.Item
                          name="duong"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                      </td>
                      <td>
                        <Form.Item
                          name="chitiet"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                      </td>
                    </>
                  )}
                </Form.List>
              </tr>
              <tr>
                <td className="form-label-item-require">Thực tế </td>
                <Form.List name="thucte">
                  {(fields, { add, remove }) => (
                    <>
                      <td>
                        <StyledFormItem
                          name="tinh"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </StyledFormItem>
                      </td>
                      <td>
                        <StyledFormItem
                          name="quan"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </StyledFormItem>
                      </td>
                      <td>
                        <StyledFormItem
                          name="xa"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </StyledFormItem>
                      </td>
                      <td>
                        <StyledFormItem
                          name="duong"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </StyledFormItem>
                      </td>
                      <td>
                        <StyledFormItem
                          name="chitiet"
                          rules={[{ required: true, message: "" }]}
                        >
                          <Select placeholder="HT nhập và cho sửa">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </StyledFormItem>
                      </td>
                    </>
                  )}
                </Form.List>
              </tr>
            </tbody>
          </table>
          <Row gutter={[24, 8]} className="mt-8">
            <Col span={12}>
              <StyledFormItem
                name="doanduong"
                label="Đoạn đường trong 
           khung giá"
              >
                <Select placeholder="HT nhập và cho sửa">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </StyledFormItem>
            </Col>
            <Col span={12}>
              <StyledFormItem
                name="khoangcach"
                label="Khoảng cách đến 
           đường chính (m)"
              >
                <Input placeholder="HT nhập và cho sửa" />
              </StyledFormItem>
            </Col>
            <Col span={12}>
              <StyledFormItem
                name="loaiduong"
                label="Loại đường tiếp giáp"
                rules={[{ required: true, message: "" }]}
              >
                <Select placeholder="HT nhập và cho sửa">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </StyledFormItem>
            </Col>
            <Col span={12}>
              <StyledFormItem
                name="khoangcachSTB"
                label="Khoảng cách tới 
           STB gần nhất (m)"
              >
                <Input placeholder="HT nhập và cho sửa" />
              </StyledFormItem>
            </Col>
            <Col span={12}>
              <StyledFormItem
                name="vitri"
                label="Vị trí"
                rules={[{ required: true, message: "" }]}
              >
                <Select defaultValue={"mattien"}>
                  <Select.Option value="mattien">Mặt tiền</Select.Option>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </StyledFormItem>
            </Col>
            <Col span={12}>
              <StyledFormItem label="Độ rộng đường (m)">
                <Space.Compact>
                  <Form.Item name={["dorong", "a"]}>
                    <Input
                      style={{ width: "95%", marginRight: "10px" }}
                      placeholder="HT nhập và cho sửa"
                    />
                  </Form.Item>
                  <Form.Item name={["dorong", "b"]}>
                    <Input
                      style={{ width: "95%" }}
                      placeholder="HT nhập và cho sửa"
                    />
                  </Form.Item>
                </Space.Compact>
              </StyledFormItem>
            </Col>
            <Col span={24}>
              <StyledFormItem name="note" label="Ghi chú">
                <Input placeholder="HT nhập và cho sửa" />
              </StyledFormItem>
            </Col>
            <Col span={12}>
              <StyledFormItem name="khuvuc" label="Khu vực">
                <Select placeholder="Chọn">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </StyledFormItem>
            </Col>
            <Col span={12}>
              <StyledFormItem name="vttkg" label="Vị trí trong khung giá">
                <Select placeholder="Chọn">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </StyledFormItem>
            </Col>
          </Row>
          <FormList items={items}/>
        </div>
      )}
    </Form.List>
  );
}
