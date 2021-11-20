import React, { useState } from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import axiosInstance from "../helper/axiosinstance";
import logo from "../images/brand-logo.png";

const LoginLayout = () => {
  // const [data, setData] = useState("");
  // console.log(data);
  // const [values, setValues] = useState("");
  // const [values, setValues] = useState({
  //   email: "",
  //   password: ""
  // });
  // const handleChange = e => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   });
  // };
  // axiosInstance.post("/login", {});
  const email = "";
  const submit = e => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div
      className=""
      style={{ maxWidth: "50%", marginLeft: "15%", marginTop: "5%" }}
    >
      <div style={{ textAlign: "center" }}>
        <img src={logo} style={{ height: "100px", width: "auto" }} />
      </div>
      <Form className="login">
        <FormGroup>
          <label>Email</label>
          <FormInput
            size="lg"
            type="email"
            placeholder="Email"
            name="email"
            onChange={event => event.target.email}
            // onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <FormInput
            size="lg"
            type="password"
            name="email"
            placeholder="Password"
            // onChange={handleChange}
          />
        </FormGroup>

        <Button
          block
          size="lg"
          style={{
            marginTop: "5%",
            color: "white",
            backgroundColor: "#f6f5fa"
          }}
          onSubmit={submit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginLayout;
