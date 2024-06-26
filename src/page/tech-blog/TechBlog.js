import './TechBlog.css'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
const Answer = (props) => {
    return (
        <div className={'Answer'}>
            <p>{props.data}</p>
            <QuestionAnswerIcon/>
            <p>Answered by: {props.writer}</p>
        </div>
    );
};
const Question = (props) => {
    return(
        <div className={"Question"}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <QuestionMarkIcon/>
            <h3>Answers</h3>
            {
                props.answers.map((answer, index) => (
                    <Answer data = {answer.data} writer={answer.writer}/>
                ))
            }

        </div>
        )
}
const dummyQuestion = {
    title: "react how to center a div",
    description: "I'm new to react, and i have problem centering a div in react",
    answers: [
        {
            writer: "Me",
            data: "just use flex_direction=center and you are good to go"
        },
        {
            writer: "You",
            data: "align_items=center"
        }
    ]
}
const dummyPost = {
    title: "center a div in react",
    writer: "ME",
    comments: {
        writer:"YOU",
        content: "where is the content?"
    }

}

function Post(props) {
    return (
        <div>
            <h2>BLOG POST</h2>
            <p>{props.title}</p>
            <p>{props.writer}</p>
        </div>
    );
}


export const TechBlog = () => {
    return(
        <div>
            <Question
                title={dummyQuestion.title}
                description = {dummyQuestion.description}
                answers = {dummyQuestion.answers}/>
            <Post
                title={dummyPost.title}
                writer = {dummyPost.writer}
                comments = {dummyPost.comments}
                />


        </div>
    )
}