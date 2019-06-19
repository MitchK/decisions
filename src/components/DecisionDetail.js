import React from 'react';

import OptionsList from './OptionsList';

const decision = {
  id: 1,
  text: "What should I eat today?",
  options: [{
    id: 1,
    text: "Geschnetzeltes"
  },{
    id: 2,
    text: "Pasta"
  }]
};

const DecisionDetail = props => {
  // const { decision } = props;
  return (
    <div>
      <h1>{decision.text}</h1>
      <OptionsList options={decision.options} />
    </div>
  )
};

export default DecisionDetail;
