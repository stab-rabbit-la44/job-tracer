import React from 'react';
import ApplicationList from './containers/ApplicationList';

export default function App() {
  return (
    <div>
      <button type="button" onClick={() => console.log('create button here')}>
        Create
      </button>
      <ApplicationList />
      <ApplicationList />
      <ApplicationList />
    </div>
  );
}
