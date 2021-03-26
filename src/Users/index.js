import React, { useEffect, useState } from "react";
import { Row, Col } from 'antd';
// Own components
import ContainerLayout from "../Layouts/ContainerLayout";
import PageHeaderStyled from "../Shared/Common/PageHeader";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseUsers = await response.json();
    setUsers(responseUsers);
  };

console.log("Users", users);

  return (
  <ContainerLayout backgroundColor="#ffffff" paddingX={2} paddingY={2}>
    <PageHeaderStyled title="Usuarios" className='ml-2 px-2 pt-0'/>
    {
      <Row>
        {
          users.length > 0 && (
            users.map(item => {
              const { name, username, email } = item;
              console.log(item);
              return (
              <Row type='flex' justify="space-between" gutter={12,12}>
                  <Col xs={8}>{name}</Col>
                  <Col xs={8}>{username}</Col>
                  <Col xs={8}>{email}</Col>
                </Row>
              )
            })
          )
        }
      </Row>
    }
  </ContainerLayout>
    )
};

export default Users;
