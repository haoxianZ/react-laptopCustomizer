import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';
import Feature from './Feature';



class SumFeatures extends Component{
    render(){
        return (
            Object.keys(this.props.features).map((feature, idx) => <Feature 
            features={this.props.features} 
            updateFeature={this.props.updateFeature}
            selected = {this.props.selected}
            feature={feature} idx={idx}/>)
        )
        
    
  
}
}

export default SumFeatures