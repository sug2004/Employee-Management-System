// eslint-disable-next-line no-unused-vars
import { MailOutlined , BellFilled } from "@ant-design/icons";
import { Badge, Space, Typography, Image } from 'antd'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled(Typography.Title)`
  color: #10409e;
  /* Add other styles for the heading here */
`;

export default function Header() {
  return (
    <div className='Header'>
      <Image width={50} src="https://altruisty.site/images/logo_design.png" ></Image>
        <StyledTitle className="heading">Dashboard</StyledTitle>
        <Space>
            <Badge count={10} dot >
            <MailOutlined style={{fontSize:24}} />
            </Badge>
            <Badge count={20} >
            <BellFilled style={{fontSize:24}} />
            </Badge>
        </Space>
    </div>
  )
}
