import React from "react";

import { Table } from "antd";

import { useSelector } from "react-redux";

function UserListcreen() {
  const users = useSelector((state) => state.userReducer);

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
      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default UserListcreen;
