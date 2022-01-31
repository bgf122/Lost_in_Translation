import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import SignSymbol from "./SignSymbol"

const Translation = () => {
    const [text, setText] = useState("")
    const [translation, setTranslation] = useState([])

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

export default Translation