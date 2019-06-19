import React from 'react';

import OptionsListItem from './OptionsListItem';

const OptionsList = props => {
  const { options } = props;
  return (
    <div>
      <h2>Options</h2>
      <ul>
        {options.map(option => (
          <OptionsListItem key={option.id} option={option}/>
        ))}
      </ul>
    </div>
  );
};

export default OptionsList;
