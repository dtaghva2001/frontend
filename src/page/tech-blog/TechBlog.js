import {Container} from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {useState} from "react";


function Question(props) {
    const question = props.question;
    const answer = props.answer;
    return (
        <Container>
            <p>{question}</p>
            <p>{answer}</p>
        </Container>
    )

}

function Questions() {
    const [questions, setQuestions] = useState({})
    return(
        <Container>
            {

            }
        </Container>
    )
}

export const TechBlog = () => {
    return (
        <Container>
            <Questions/>
        </Container>
    )
}
