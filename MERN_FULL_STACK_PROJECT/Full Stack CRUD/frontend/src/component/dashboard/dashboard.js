import React, { useState, useEffect } from "react";
import { Container, Col, Row,Table,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/get");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(
          "error while fetching data from backend to fronted",
          error.message
        );
      }
    };
    fetchUsers();

  }, []);

  //update button working and get user by id method backend 
  const navigate = useNavigate();
  const handleUpdate = (userId) => {
    navigate(`/user/${userId}`);
  }

  return <>

  <Container className="mt-5">
    <Row>
      <Col>
      <h1 className="text-center">Get All Added Users In DataBase</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
               <td>
                <Button variant="warning" onClick={() => handleUpdate(user.id)}>
                  Update
                </Button>{" "}
                <Button variant="danger" onClick>
                  Delete
                </Button>
              </td> 
            </tr>
            
          ))}
        </tbody>
      </Table>
      </Col>
    </Row>

  </Container>
  
  
  
  
  
  
  
  </>;
};

export default Dashboard;





