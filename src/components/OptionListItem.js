import React from 'react';

const OptionListItem = (props) => {
  const { option } = props;
  return (
    <li>{ option.text }</li>
  );
}

export default OptionListItem;
