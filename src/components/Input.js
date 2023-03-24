import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Input = ({ file, setFile }) => {
  const [task, setTask] = useState("");

  const updateTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const addTask = () => {
    // console.log(task);
  };

  const handleFile = (e) => {
    e.preventDefault();
    try {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        setFile(e.target.result);
        console.log(e.target.result);

      };
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Form className="d-flex flex-column gap-2" onSubmit={addTask}>
      <Form.Group>
        <Form.Label>Enter Task Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Task Name"
          value={task}
          onChange={updateTask}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter JSON file</Form.Label>
        <Form.Control
          type="file"
          placeholder="Enter JSON Name"
          onChange={handleFile}
        />
      </Form.Group>
      <Button
        className="w-50 mx-auto"
        variant="primary"
        type="button"
        onClick={addTask}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Input;
