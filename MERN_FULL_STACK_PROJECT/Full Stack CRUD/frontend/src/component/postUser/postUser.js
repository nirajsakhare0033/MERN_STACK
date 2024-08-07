/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './postUser.css'
import { useNavigate } from "react-router-dom";

const PostUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("name", formData.name);
    // console.log("email", formData.email);
    // console.log("phone", formData.phone);

    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json(response)
      navigate("/")
      console.log(data);
      
    } catch (error) {
      console.log(error)
    }
    

  };

  return (
    <>
      <div className="center-form">
        <Form onSubmit={handleSubmit}>
          <h1>Post New User</h1>
          <Form.Group className="mb-3">
            <Form.Label><bold>Name</bold></Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="name" // Add name attribute
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="email" // Add name attribute
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="phone" // Add name attribute
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            Click Here
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PostUser;
