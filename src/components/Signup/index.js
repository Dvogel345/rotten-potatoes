import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

// name password email
function Signup(props) {
  let navigate = useNavigate();
  const signupRedirect = () => {
    let path = `/dashboard`;
    navigate(path);
  };

  return props.trigger ? (
    <div className="signup-popup">
      <div className="signup-popup-item">
        <FontAwesomeIcon
          className="fa-lg signup-close-btn"
          onClick={() => props.setTrigger(false)}
          icon={faXmark}
        />
        <Form onSubmit={() => props.setTrigger(false)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="signup-label">Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="signup-label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="signup-label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={signupRedirect}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Signup;
