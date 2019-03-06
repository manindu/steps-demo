import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import logo from './logo.svg';
import './App.css';
import styles from './styles.module.scss';

const StepItem = ({ number }) => {
  return (
    <div className={styles.step}>
      <div className={styles.line}/>
      <div className={styles.circle}>
        <p>{number}</p>
      </div>
      <div className={styles.line}/>
    </div>
  );
};

class Steps extends Component {
  getItems = () => {
    const { steps, currentStep } = this.props;
    const items = steps.map(step => <StepItem number={step} />)

    return items;
  };

  render () {
    const { currentStep } = this.props;
    return (

        <div className={styles.stepGroup}>
          <Flipped flipId={currentStep}>
            <div className={styles.currentCircle} />
          </Flipped>
          {this.getItems()}
        </div>
    );
  }
}

class App extends Component {

  state = {
    current: 1
  }

  render() {
    return (
      <div className="App">
        <div>
          <Steps steps={[1, 2, 3, 4, 5]} currentStep={this.state.current}/>
        </div>
        <div>
          <button onClick={() => this.setState({ current: this.state.current - 1 })}>Previos</button>
          <button onClick={() => this.setState({ current: this.state.current + 1 })}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
