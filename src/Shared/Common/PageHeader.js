import styled from "styled-components";

import { PageHeader } from "antd";

const PageHeaderStyled = styled(PageHeader)`
  font-variant: normal;
  .ant-page-header-heading-title {
    font-size: 20px;
    color: rgba(23, 60, 117, 1);
    font-weight: 200;

    @media (min-width: 375px) {
      font-size: 24px;
    }
  }

  .ant-page-header-heading-sub-title:before {
    content: ">";
    font-weight: 100;
    font-size: 20px;
    margin-right: 10px;
    text-decoration: none;
    position: relative;
  }

  .ant-page-header-heading-sub-title {
    line-height: 32px;
    margin: 0;
    margin-right: 0px;
  }
`;

export default PageHeaderStyled;