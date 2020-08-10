import React, { Component } from 'react';
import Summary from './Summary'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import  SumFeatures  from "./SumFeatures";
import './App.css';
import SummaryTotal from './SummaryTotal';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <SumFeatures features={this.props.features} 
            updateFeature={this.updateFeature} selected={this.state.selected}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
            selected={this.state.selected}
            USCurrencyFormat={this.USCurrencyFormat}/>
            <SummaryTotal selected={this.state.selected} />
            
          </section>
        </main>
      </div>
    );
  }
}

export default App;
