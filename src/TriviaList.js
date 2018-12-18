import React from 'react';
// import Question component

export default function TriviaList(props) {
  return (
    <ul>
      {
        props.questions.map((question, index) => {
          console.log(question)
          return (<div>{question.title}</div>)
          {/* Add your Question component here */}

          //Let's return our Question component here instead of the 
          //div with just the title that you see above
          //BE SURE TO CORRECTLY PASS DOWN THE PROPS YOU NEED!
        })
      }
    </ul>
  )
}