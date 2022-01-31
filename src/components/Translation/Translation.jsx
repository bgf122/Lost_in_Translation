import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import SignSymbol from "./SignSymbol"
import { addTranslation } from "../../api/translation";
import { storageRead } from "../../utils/storage";
import withAuth from "../../hoc/withAuth";

const Translation = () => {
    const [text, setText] = useState("")
    const [translation, setTranslation] = useState([])
    const user = storageRead("translate-user")

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const translate = () => {
        const letters = []

        for (let i = 0; i < text.length; i++) {
            let ASCII = text.charAt(i).toLowerCase().charCodeAt(0)
            if (ASCII >= 97 && ASCII <= 122) {
                letters.push(text.charAt(i).toLowerCase())
            }
        }
        setTranslation(letters)
        if (letters.length > 0) addTranslation(user, text)
    }

    return (
        <>
            <input type="text" value={text} onChange={(text) => handleTextChange(text)}></input><Button onClick={() => translate()}>Translate</Button>
            <Container>
                {translation.map((letter, index) => {
                    return <SignSymbol key={index} letter={letter} />
                })}
            </Container>
        </>
    )
}

export default withAuth(Translation)