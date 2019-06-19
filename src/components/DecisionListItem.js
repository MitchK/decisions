import React from 'react';
import { Link } from 'react-router-dom';

const DecisionListItem = (props) => {
  const { decision } = props;
  return (
    <li style={{
      'padding': '10px',
    }}><Link to={`/decisions/${decision.id}`}>{ decision.text }</Link></li>
  );
}

export default DecisionListItem;

