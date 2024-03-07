import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputGroup } from "@themesberg/react-bootstrap";

export default function CustomInput(props) {
  const {
    icon = "",
    label = "",
    type = "",
    required = false,
    autoFocus = false,
    required1=false
  } = props;
  return (
    <Form.Group id="email" className="mb-4">
      <Form.Label>
        {label}
        {required ? <span style={{ color: "red" }}> *</span> : ""}
      </Form.Label>
      <InputGroup>
        <InputGroup.Text>
          <FontAwesomeIcon icon={icon} />
        </InputGroup.Text>
        <Form.Control
          autoFocus={autoFocus}
          required={required1?required1:required}
          type={type}
          {...props}
        />
        {props.children}
      </InputGroup>
    </Form.Group>
  );
}
