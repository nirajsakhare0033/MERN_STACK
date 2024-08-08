import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.log(
          "Error while fetching data from backend to frontend",
          error.message
        );
      }
    };
    fetchUser();
  }, [id]);

  

  return (
    <>
      <div className="center-form">
        <Form onSubmit={handleSubmit}>
          <h1>Update User</h1>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
              value={formData.phone || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            Update User
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateUser;
