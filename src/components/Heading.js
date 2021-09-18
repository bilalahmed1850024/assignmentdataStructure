import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

export const Heading = (props) => {

  const [arraySize, setArraySize] = useState(null);
  const { currentArray } = useContext(GlobalContext);
  const data = props.location
  console.log(data)
  const onChange = (e) => {
    setArraySize(e.target.value);
  }



  const handleError = () => {
    alert("please Enter the size of user")
  }

  useEffect(() => {
    const Data = localStorage.getItem("CurrentArraySize")
    setArraySize(Data)
  }, [])


  const handleUser = () => {
    if (arraySize > 0) {
      currentArray(arraySize)
      localStorage.setItem("CurrentArraySize", arraySize)
    } else {
      alert("First fill up the state properly")
    }
  }

  return (
    <Navbar color="dark" dark>
      <FormGroup>
        <Label>Enter Array Size</Label>
        <Input type="number" value={arraySize} onChange={onChange} placeholder="Enter the ArraySize" required></Input>
      </FormGroup>
      <Container>
        <NavbarBrand href="/">My Team</NavbarBrand>
        <Nav>
          {arraySize > 0 ? <NavItem>
            <Link className="btn btn-primary" to={{
              pathname: `/add`,
              state: { arraySize }
            }} onClick={handleUser} >Add User</Link>
          </NavItem> : <NavItem>
            <Link className="btn btn-primary" onClick={handleError}>Add User</Link>
          </NavItem>
          }
        </Nav>

      </Container>
    </Navbar>
  )
}
