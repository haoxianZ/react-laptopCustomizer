import React, {Component}from 'react';
import Summary from './Summary';
import SummaryTotal from './SummaryTotal'

class MainSummary extends Component{
    render(){
        return (
            <div>
            <Summary 
            selected={this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}/>
            <SummaryTotal selected={this.props.selected} />

            </div>
            
        )
    }
    
}

export default MainSummary