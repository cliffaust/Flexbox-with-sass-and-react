import React, { Component } from "react";

class CalculatorLayout extends Component {
  render() {
    const zero = this.props.zero;
    const one = this.props.one;
    const two = this.props.two;
    const three = this.props.three;
    const four = this.props.four;
    const five = this.props.five;
    const six = this.props.six;
    const seven = this.props.seven;
    const eight = this.props.eight;
    const nine = this.props.nine;
    return (
      <div className="layout">
        <h1 className="title">Flex Box Calculator Layout</h1>
        <div className="layout__header">
          <h1 className="layout__header--text">{zero}</h1>
        </div>
        <div className="layout__first-section">
          <h1 className="layout__first-section--gray">AC</h1>
          <h1 className="layout__first-section--gray">+/-</h1>
          <h1 className="layout__first-section--gray">%</h1>
          <h1 className="layout__first-section--yellow">÷</h1>
        </div>
        <div className="layout__second-section">
          <h1 className="layout__second-section--gray">{seven}</h1>
          <h1 className="layout__second-section--gray">{eight}</h1>
          <h1 className="layout__second-section--gray">{nine}</h1>
          <h1 className="layout__second-section--yellow">x</h1>
        </div>
        <div className="layout__third-section">
          <h1 className="layout__third-section--gray">{four}</h1>
          <h1 className="layout__third-section--gray">{five}</h1>
          <h1 className="layout__third-section--gray">{six}</h1>
          <h1 className="layout__third-section--yellow">-</h1>
        </div>
        <div className="layout__fourth-section">
          <h1 className="layout__fourth-section--gray">{one}</h1>
          <h1 className="layout__fourth-section--gray">{two}</h1>
          <h1 className="layout__fourth-section--gray">{three}</h1>
          <h1 className="layout__fourth-section--yellow">+</h1>
        </div>
        <div className="layout__fifth-section">
          <h1 className="layout__fifth-section--gray">{zero}</h1>
          <h1 className="layout__fifth-section--gray">.</h1>
          <h1 className="layout__fifth-section--yellow">=</h1>
        </div>
      </div>
    );
  }
}

export default CalculatorLayout;
