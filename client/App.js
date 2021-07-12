import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import JobApplicationList from './components/JobApplicationList';
import store from './store';
import { loadJobApplications } from './actions/actions';

const mapStateToProps = (state) => ({
  jobApplications: state.jobApplications.jobApplications,
});

const App = (props) => {
  useEffect(() => {
    store.dispatch(loadJobApplications());
  }, []);

  return (
    <div>
      <button type="button" onClick={() => console.log('create button here')}>
        Create
      </button>
      <JobApplicationList jobApplications={props.jobApplications} />
    </div>
  );
};

// export default App;
export default connect(mapStateToProps, null)(App);
