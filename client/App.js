import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import JobApplicationList from './components/JobApplicationList';
import store from './store';
import { loadJobApplications } from './actions/actions';
import CreateJobApplicationModal from './components/modals/CreateJobApplicationModal';

const mapStateToProps = (state) => ({
  jobApplications: state.jobApplications.jobApplications,
});

const App = (props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    store.dispatch(loadJobApplications());
  }, []);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Create
      </button>
      <CreateJobApplicationModal onClose={() => setShow(false)} show={show} />
      <JobApplicationList jobApplications={props.jobApplications} />
    </div>
  );
};

// export default App;
export default connect(mapStateToProps, null)(App);
