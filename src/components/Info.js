import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Info = ({ match, names }) => (
  <h1>
    <div> Here is so public info </div>
    <div>
      {names.map(name => (
        <Link key={name} to={`${match.url}/${name}`}>
          {name}{' '}
        </Link>
      ))}
    </div>
    <Route
      path={`${match.url}/:name`}
      render={({ match }) => (
        <div>
          <Link to={`${match.url}/cool`}> Cool </Link>
          <Link to={`${match.url}/neat`}> neat </Link>
          <Link to={`${match.url}/awesome`}> awesome </Link>
          <h1>
            {match.params.name} is a
            <Route
              path={`${match.path}/:description`}
              render={({ match }) => <span> {match.params.description} </span>}
            />
            guy
          </h1>
        </div>
      )}
    />
  </h1>
);

export default connect(({ names }) => ({ names }))(Info);
