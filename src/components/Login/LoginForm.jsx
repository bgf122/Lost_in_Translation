import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { storageSave } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // Local State
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Side Effects
  useEffect(() => {
    if (user !== null) {
      navigate("translate");
    }
  }, [user, navigate]);

  // Event Handlers
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error != null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  // Render Functions
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username is too short (min. 3)</span>;
    }
  })();

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="justify-content-md-center">
            <Col lg={6}>
              <InputGroup className="mb-3">
                <FormControl
                  size="lg"
                  type="text"
                  placeholder="What's your name?"
                  {...register("username", usernameConfig)}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  variant="outline-secondary"
                >
                  <span className="material-icons blue md-48">
                    arrow_circle_right
                  </span>
                </Button>
              </InputGroup>
              {loading && <p> Logging in...</p>}
              {apiError && <p>{apiError}</p>}
              {errorMessage}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default LoginForm;
