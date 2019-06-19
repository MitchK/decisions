import React from 'react';

const OptionsListItem = (props) => {
  const { option } = props;
  return (
    <li>{ option.text }</li>
  );
}

export default OptionsListItem;

