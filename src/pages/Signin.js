/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
// import logo from "../../assets/img/kigra.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";
import CustomInput from "./CustomInput";
import { Spinner } from "reactstrap";
import "./index.css";
// import { toast } from "react-hot-toast";
// import Contact from "../../contact/Contact";
import Cookies from "js-cookie";
export default () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    account_type: "individual",
  });

  const [loading, setLoading] = useState(false);
  // const error = useSelector((e) => e.auth.error);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
  }
    

  return (
    <main className="background_image">
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image">
            <img
              // src={logo}
              alt="logo"
              style={{ width: 100, marginBottom: -25, zIndex: 1 }}
            />
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-sm-4 mt-md-0 mt-4">
                  <h5 className="mb-0 mt-4 mt-sm-4 mt-md-2">
                    KANO INTEGRATED REVENUE MANAGEMENT AND ASSURANCE SYSTEM
                    (KIRMAS)
                  </h5>
                </div>
                <form className="mt-4" onSubmit={handleLogin}>
                  <CustomInput
                    label="Phone Number/TaxID"
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={({ target: { name, value } }) => {
                      setForm((p) => ({
                        ...p,
                        [name]: value.replace(/[^a-zA-Z0-9+]/g, ""),
                      }));
                    }}
                    required1="true"
                    icon={faEnvelope}
                    placeholder="Phone/TaxID"
                  />
                  <CustomInput
                    label="Your Password"
                    type="password"
                    name="password"
                    required1="true"
                    value={form.password}
                    onChange={handleChange}
                    icon={faUnlockAlt}
                  >
                    {/* <InputGroup.Text>
                      <FontAwesomeIcon icon={faUnlockAlt} />
                    </InputGroup.Text> */}
                  </CustomInput>
                  <Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label
                          htmlFor="defaultCheck5"
                          className="mb-0"
                        >
                          Remember me
                        </FormCheck.Label>
                      </Form.Check>
                      <Card.Link
                        className="small text-end"
                        as={Link}
                        // to={Routes.ForgotPassword.path}
                      >
                        Forget password?
                      </Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    {loading ? <Spinner /> : "Sign in"}
                  </Button>
                </form>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      as={Link}
                      // to={Routes.Signup.path}
                      className="fw-bold"
                    >
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Contact /> */}
        </Container>
      </section>
    </main>
  );
};
