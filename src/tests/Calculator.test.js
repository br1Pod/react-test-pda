import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  // calculator.add() - add 1 to 4 and get 5
  it('should return correct answer for addition', () => {
    const button1 = container.find('#number1');
    button1.simulate('click');
    const addition = container.find('operator_add');
    addition.simulate('click')
    const button4 = container.find('#number4');
    button4.simulate('click');
    const equals = container.find('operator-equals');
    equals.simulate('click');
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('5');
  })
})


