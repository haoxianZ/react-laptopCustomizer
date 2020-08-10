import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';
import Feature from './Feature';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class SumFeatures extends Component{
    render(){
        return (
            Object.keys(this.props.features).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    const options = this.props.features[feature].map(item => {
                    const itemHash = slugify(JSON.stringify(item));
                    return(
                        <div key={itemHash} className="feature__item">
                        <FeatureItem itemHash={itemHash}
                        key={itemHash}
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    updateFeature={this.props.updateFeature}
                    Display={item.name} cost={USCurrencyFormat.format(item.cost)}
                    feature={feature} item={item}/>
            
                    
                        </div>
                        
            
                    )
                    
                    });
                    
                    return (
                    <Feature key={idx} feature={feature} options={options} featureHash={featureHash}/>
                    );
                })
        )
        
    
  
}
}

export default SumFeatures