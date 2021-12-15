import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Table, Col, Space, Row, Button } from "antd";

import axios from "axios";

import { useDispatch } from "react-redux";
import { setAllUsers } from "../state/actions";

function UserListcreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    // getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => {
        setLoading(false);
        console.log("result: ", result);
        if (result.status === 200) {
          setUsers(result.data);
          dispatch(setAllUsers(result.data));
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

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
            <Button type="primary" loading={loading} onClick={() => getUsers()}>
              get users
            </Button>
            <Button type="primary" onClick={() => navigate("/usersList")}>
              gou to another page
            </Button>
          </Space>
        </Col>
      </Row>
      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default UserListcreen;
