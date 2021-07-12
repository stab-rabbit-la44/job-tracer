import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from './actions/actions';
import ApplicationList from './containers/ApplicationList';

const mapStateToProps = (state) => ({
  apps: state.applications.applications,
});

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const App = (props) => {
  return (
    <div>
      <button type="button" onClick={() => console.log('create button here')}>
        Create
      </button>
      <ApplicationList jobApps={props.apps} />
    </div>
  );
};

// export default App;
export default connect(mapStateToProps, null)(App);
