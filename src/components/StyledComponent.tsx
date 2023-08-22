import styled from "styled-components";
import { Collapse, Form } from "antd";

export const StyledCollapse = styled(Collapse)`
  .ant-collapse-expand-icon {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #2862af;
  }
  .ant-collapse-expand-icon::before {
    content: "Ẩn thông tin";
    margin-right: 5px;
  }
  .ant-collapse-header-text {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;

    color: #000000;
  }
`;

export const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label{
    width: 220px;
    text-align: left;
 
  }
`