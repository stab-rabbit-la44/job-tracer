/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import ModalModel from './subModal/modalModel';

const mapStateToProps = (state, ownProps) => {
  const { jobAppId, show, onClose } = ownProps;
  const { jobApplications } = state.jobApplications;
  console.log(jobAppId + " app id")
  const jobApplicationToEditArray = jobApplications.filter((el) => {
    return el.id === jobAppId;
  });
  const jobApplicationObject = jobApplicationToEditArray[0];
  console.log(jobApplicationObject);
          // jobApplications: [{
        //   companyName: action.payload.company_name,
        //   description: action.payload.description,
        //   favorite: action.payload.favorite,
        //   jobTitle: action.payload.job_title,
        //   notes: action.payload.notes,
        //   postSource: action.payload.post_source,
        //   salary: action.payload.salary,
        //   statusDate: action.payload.status_date,
        //   statusName: action.payload.status_name,
        // }],
  return { jobAppId, show, onClose, jobApplicationObject };
};


const mapDispatchToProps = (dispatch) => {
  return {
    editAppHandler: (jobAppId, jobApplicationObject) =>
      dispatch(actions.editApp(jobAppId, jobApplicationObject)),
  };
};

class EditJobApplicationModal extends React.Component {
  constructor(props) {
    super(props);

    this.formFieldChangeHandler = this.formFieldChangeHandler.bind(this);
    this.SubmitHandler = this.SubmitHandler.bind(this);
  }

  formFieldChangeHandler(event) {
    this.props.jobApplicationObject[event.target.name] = event.target.value;
  }

  SubmitHandler(event) {
    event.preventDefault();
    this.props.editAppHandler(
      this.props.jobAppId,
      this.props.jobApplicationObject
    );
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <ModalModel
        details={this.props.jobApplicationObject}
        formFieldChangeHandler={this.formFieldChangeHandler}
        handleSubmit={this.SubmitHandler}
        onClose={this.props.onClose}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditJobApplicationModal);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EditJobApplicationModal);
