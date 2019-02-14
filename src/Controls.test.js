import React from 'react';
import Controls from './Controls';
import { shallow, mount} from 'enzyme';

const setLimitMock = jest.fn();

describe('Controls', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Controls
        setLimit={setLimitMock}
      />
    );
  });

  it('should invoke setLimit when button is clicked', () => {
    wrapper.find('.set-filter').simulate('click');
    expect(setLimitMock).toBeCalled();
  });

  it('should update the question count on input change', () => {
    expect(wrapper.state('questionCount')).toEqual(0);
    wrapper.find('#question-count').simulate('change', { target: { value: 4 }})
    expect(wrapper.state('questionCount')).toEqual(4);
  });

});
