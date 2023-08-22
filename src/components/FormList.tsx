import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
type TableFormType = {
  name: string;
  label: string;
  require?: boolean | false;
};
interface FormListProps {
  items: TableFormType[];
}
const FormList: React.FC<FormListProps> = ({ items }) =>{
  return (
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
        {items.map((item) => (
          <tr>
            <td className={item.require ? "form-label-item-require" : ""}>{item.label}</td>
            <Form.List key={item.name} name={item.name}>
              {(fields, { add, remove }) => (
                <>
                  <td>
                    <Form.Item name="HSPL" rules={[{ required: item.require, message: "" }]}>
                      <Input placeholder="STB nhập và cho sửa" />
                    </Form.Item>
                  </td>
                  <td></td>
                  <td>
                    <Form.Item name="thucte" rules={[{ required: item.require, message: "" }]}>
                      <Input placeholder="Hệ thống tự nhập và cho sửa" />
                    </Form.Item>
                  </td>
                </>
              )}
            </Form.List>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default FormList;