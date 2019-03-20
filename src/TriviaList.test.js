import React from 'react';
import TriviaList from './TriviaList';
import { shallow } from 'enzyme';


const mockQuestions = [{category:"Entertainment: Video Games",type:"multiple",difficulty:"hard",title:"When was the first Call of Duty title released?",correct_answer:"October 29, 2003",incorrect_answers:["December 1, 2003","November 14, 2002","July 18, 2004"],id:1},{category:"Entertainment: Books",type:"multiple",difficulty:"medium",title:"How many books are in the Chronicles of Narnia series?",correct_answer:"7",incorrect_answers:["6","8","5"],id:2},{category:"Entertainment: Film",type:"boolean",difficulty:"easy",title:"Han Solo's co-pilot and best friend, 'Chewbacca', is an Ewok.",correct_answer:"False",incorrect_answers:["True"],id:3}];
const mockQuestionCount = 2;

describe('TriviaList', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TriviaList
        triviaQuestions={mockQuestions}
        questionCount={mockQuestionCount}
      />
    );
  });

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});



