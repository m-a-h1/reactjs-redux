import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Table, Col, Space, Row, Button } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../state/reducers/users/users.actions";

function UserListcreen() {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const getAllUsers = fetchUsers();

  const { isLoading, users, errorMessage } = useSelector((state) => state.users);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div style={{ margin: "50px" }}>
      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Col>
          <Space>
            <Button type="primary" loading={isLoading} onClick={() => getAllUsers(dispach)}>
              get users
            </Button>
          </Space>
        </Col>
      </Row>
      {errorMessage && <p>{errorMessage}</p>}
      {users && <Table columns={columns} dataSource={users} />}
    </div>
  );
}

export default UserListcreen;
