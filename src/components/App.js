import React from 'react';

import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

// Components
import DecisionList from './DecisionList';
import DecisionDetail from './DecisionDetail';
import AddDecision from './AddDecision';
import NotFound from './NotFound';

import { connect } from 'react-redux';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <Switch>
        <Redirect exact from="/" to="/decisions" />
        <Route path="/decisions/add" component={AddDecision} />
        <Route path="/decisions/:id" component={DecisionDetail} />
        <Route
          path="/decisions"
          component={connect((state) => 
            ({decisions: state.decisions})
          )(DecisionList)
          }
        />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
