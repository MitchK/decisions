import React from 'react';
import { Link } from 'react-router-dom';

import LinkButton from './LinkButton';
import DecisionListItem from './DecisionListItem';

const DecisionList = (props) => {
  const { decisions } = props;
  if (!decisions) {
    return (
      <div>
        <h1>Decisions</h1>
        No decisions
      </div>
    );
  }
  return (
    <div>
      <h1>Decisions</h1>
      <ul style={{
          'borderStyle': 'solid',
          'borderWidth': '1px',
          'borderColor': '#b2b2b2',
          'backgroundColor': '#e2e2e2',
          'borderRadius': '5px',
          'textDecoration': 'none',
          'marginTop': '10px',
          'padding': 0,
        }}
      >
        {decisions.map(decision => (
          <DecisionListItem key={decision.id} decision={decision} />
        ))}
      </ul>
      <LinkButton to={`/decisions/add`}>Add decision</LinkButton>
    </div>
  )
};

export default DecisionList;
