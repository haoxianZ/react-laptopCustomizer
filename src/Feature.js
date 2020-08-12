import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
class Feature extends Component{
  
    render(){
      const featureHash = this.props.feature + '-' + this.props.idx;
  const options = this.props.features[this.props.feature].map(item => {
  const itemHash = slugify(JSON.stringify(item));
  return(
      <div key={itemHash} className="feature__item">
      <FeatureItem itemHash={itemHash}
      key={itemHash}
  name={slugify(this.props.feature)}
  checked={item.name === this.props.selected[this.props.feature].name}
  updateFeature={this.props.updateFeature}
  Display={item.name} cost={USCurrencyFormat.format(item.cost)}
  feature={this.props.feature} item={item}/>

  
      </div>
      

  )
  
  });
        return(
            <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{this.props.feature}</h3>
          </legend>
          {options}
        </fieldset>
        )
    }
}
export default Feature