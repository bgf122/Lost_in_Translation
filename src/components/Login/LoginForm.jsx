import { useState } from "react";
import { useForm } from "react-hook-form";
import {loginUser} from "../../api/user"
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ loading, setLoading ] = useState(false)

  const onSubmit = async({ username }) => {
    setLoading(true)
    const [error, user] = await loginUser(username)
    console.log('Error: ', error)
    console.log('User: ', user)
    setLoading(false)
  };
  console.log(errors);

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="align-items-center">
          <Col md={6}>
            <InputGroup className="mb-3">
              <FormControl
                size="lg"
                type="text"
                placeholder="What's your name?"
                {...register("username", usernameConfig)}
              />
              <Button type="submit" disabled={ loading } variant="outline-secondary">
                <span className="material-icons blue md-48">
                  arrow_circle_right
                </span>
              </Button>
              
            </InputGroup>
          </Col>
        </Row>
        { loading &&  <p> Logging in...</p>}
        {errorMessage}
      </Form>
    </>
  );
};
export default LoginForm;
