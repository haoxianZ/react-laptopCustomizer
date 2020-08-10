return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === this.state.selected[feature].name}
        onChange={e => this.updateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    </div>
  );

const features = Object.keys(this.props.features).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const options = this.props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return(
      <div key={itemHash} className="feature__item">
        <FeatureItem itemHash={itemHash}
    name={slugify(feature)}
    checked={item.name === this.state.selected[feature].name}
    updateFeature={this.updateFeature}
    Display={item.name} cost={USCurrencyFormat.format(item.cost)}
    feature={feature} item={item}/>

    
      </div>
      

    )
    
  });
    
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
});

const summary = Object.keys(this.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.state.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

  <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>