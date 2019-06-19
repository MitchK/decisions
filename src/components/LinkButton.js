import React from 'react';

import { Link } from 'react-router-dom';
import { white } from 'ansi-colors';

export default ({ children, ...props }) => (
  <Link {...props}>
    <button type="button" style={{
        marginTop: '10px',
        marginRight: '10px',
        padding: '10px', border: 'none',
        borderRadius: '10px',
        backgroundColor: '#4ef442',
        color: 'white',
      }}
    >
      {children}
    </button>
  </Link>
);
