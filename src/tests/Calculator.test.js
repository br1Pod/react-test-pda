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

    const addition = container.find('#operator_add');
    addition.simulate('click');

    const button4 = container.find('#number4');
    button4.simulate('click');

    const equals = container.find('#operator-equals');
    equals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('should subtract 7 - 4 and return 3', () => {
    const button7 = container.find('#number7');
    button7.simulate('click');

    const subtraction = container.find('#operator-subtract');
    subtraction.simulate('click');

    const button4 = container.find('#number4');
    button4.simulate('click');

    const equals = container.find('#operator-equals');
    equals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('should multiply 3 by 5 and get 15', () => {
    const btn3 = container.find('#number3');
    btn3.simulate('click');

    const btnMultiply = container.find('#operator-multiply');
    btnMultiply.simulate('click');

    const btn5 = container.find('#number5');
    btn5.simulate('click');

    const equals = container.find('#operator-equals');
    equals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('should divide 21 by 7 and get 3', () => {
    const btn2 = container.find('#number2');
    btn2.simulate('click');
    
    const btn1 = container.find('#number1');
    btn1.simulate('click');

    const btnDivide = container.find('#operator-divide');
    btnDivide.simulate('click');

    const btn7 = container.find('#number7');
    btn7.simulate('click');

    const equals = container.find('#operator-equals');
    equals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  // calculator.numberClick() - concatenate multiple number button clicks
  it('should concatenate 2, 1, 7, & 8 and return 2178', () => {
    const btn2 = container.find('#number2');
    btn2.simulate('click');

    const btn1 = container.find('#number1');
    btn1.simulate('click');

    const bt7 = container.find('#number7');
    bt7.simulate('click');

    const bt8 = container.find('#number8');
    bt8.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('2178');
  })

  
})


