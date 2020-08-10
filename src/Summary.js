import React, {Component} from 'react';
import SummaryOption from './SummaryOption';


  class Summary extends Component {
      render(){
           return( Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
          return (
          <SummaryOption featureHash={featureHash} feature={feature} 
          selectedOption={selectedOption}
          key={idx}
          />)})
        
           )}
  }
  export default Summary