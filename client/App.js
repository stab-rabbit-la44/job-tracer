import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from './actions/actions';
import JobApplicationList from './containers/JobApplicationList';
import CreateJobApplicationModal from './components/modals/CreateJobApplicationModal';

const mapStateToProps = (state) => ({
  apps: state.applications.applications,
});

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const App = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Create
      </button>
      <CreateJobApplicationModal onClose={() => setShow(false)} show={show} />
      <JobApplicationList jobApps={props.apps} />
    </div>
  );
};

// export default App;
export default connect(mapStateToProps, null)(App);
