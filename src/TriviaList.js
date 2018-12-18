import React from 'react';

import Question from './Question.js'

export default function TriviaList(props) {
  return (
    <ul>
      {
        props.triviaQuestions.map((question) => {
          return <Question question={question}
                           key={question.id} />
        }).slice(0, props.questionCount)
      }
    </ul>
  )
}