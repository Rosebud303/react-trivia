import React from 'react';
import Question from './Question';
import { shallow } from 'enzyme';


const mockQuestion = {
  category:"Entertainment: Video Games",
  type:"multiple",
  difficulty:"hard",
  title:"When was the first Call of Duty title released?",
  correct_answer:"October 29, 2003",
  incorrect_answers:["December 1, 2003","November 14, 2002","July 18, 2004"],
  id:1
};

describe('Question', () => {

  let wrapper;

  
  beforeEach(() => {
    wrapper = shallow(
      <Question
        question={mockQuestion}
        key={mockQuestion.id}
      />
    );
  });


  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({ showAnswer: false })
  });



  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
 

  it('should update the answer state when toggleAnswer is called', () => {
    expect(wrapper.state('showAnswer')).toEqual(false);
    wrapper.instance().toggleAnswer();
    expect(wrapper.state('showAnswer')).toEqual(true);
  });

});



