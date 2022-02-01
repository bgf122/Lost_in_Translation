import { useState } from "react";
import { addTranslation } from "../../api/translation";
import { useUser } from "../../context/UserContext";
import { storageRead, storageSave } from "../../utils/storage";
import SignSymbol from "./SignSymbol";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Translation = () => {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState([]);
  const { user, setUser } = useUser();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const translate = async () => {
    const letters = [];

    for (let i = 0; i < text.length; i++) {
      let ASCII = text.charAt(i).toLowerCase().charCodeAt(0);
      if (ASCII >= 97 && ASCII <= 122) {
        letters.push(text.charAt(i).toLowerCase());
      }
    }
    setTranslation(letters);

    if (letters.length > 0) {
      let userResponse = await addTranslation(user, text);
      console.log(userResponse);
      storageSave("translate-user", userResponse);
      setUser(storageRead("translate-user"));
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <InputGroup className="mb-3">
              <FormControl
                size="lg"
                type="text"
                placeholder="What do you want to translate?"
                value={text}
                onChange={(text) => handleTextChange(text)}
              />
              <Button onClick={() => translate()}>Translate</Button>
            </InputGroup>
            <Container className="p-5">
              {translation.map((letter, index) => {
                return <SignSymbol key={index} letter={letter} />;
              })}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Translation;
