import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser, users } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    const Data = localStorage.getItem("CurrentArraySize")

    if (users.length < Data) {
      e.preventDefault();
      const newUser = {
        id: uuid(),
        name
      }
      addUser(newUser);
      history.push("/");
    } else {
      alert("please increase the size of Array")
      history.push("/");

    }
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
