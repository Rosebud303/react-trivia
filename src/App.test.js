import React from 'react';
import App from './App';
import { triviaQuestions, categories } from './api.js';
import { shallow } from 'enzyme';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({
      triviaQuestions: triviaQuestions,
      selectedLimit: 5
    })
  });

  it('should update the limit when setLimit is called', () => {
    expect(wrapper.state('selectedLimit')).toEqual(5);
    wrapper.instance().setLimit(7);
    expect(wrapper.state('selectedLimit')).toEqual(7);
  });

});
