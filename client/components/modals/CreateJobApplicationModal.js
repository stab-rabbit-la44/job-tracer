/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  addJobApplication: () => dispatch(actions.addJobApplication),
});

class CreateJobApplicationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        companyName: '',
        jobTitle: '',
        salary: null,
        postSource: '',
        description: '',
        statusName: '',
        notes: '',
        statusDate: '',
        favorite: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formFieldChangeHandler = this.formFieldChangeHandler.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addJobApplication(this.state.details);
  }

  formFieldChangeHandler(event) {
    const { details } = this.state;
    details[event.target.name] = event.target.value;
    this.setState({ details });
  }

  SubmitHandler(event) {
    event.preventDefault();
    this.props.submitHandler(this.state.details);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Create Job Application</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={this.SubmitHandler}>
              <label>
                Favorite?:
                <select
                  name="favorite"
                  value={this.state.details.favorite}
                  onChange={this.formFieldChangeHandler}
                >
                  <option selected value="false">
                    No
                  </option>
                  <option value="true">Yes</option>
                </select>
              </label>
              <label>
                Company Name:
                <input
                  type="text"
                  name="companyName"
                  value={this.state.details.companyName}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Job Title:
                <input
                  type="text"
                  name="jobTitle"
                  value={this.state.details.jobTitle}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Salary:
                <input
                  type="text"
                  name="salary"
                  value={this.state.details.salary}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Application Status Date:
                <input
                  type="date"
                  name="statusDate"
                  value={this.state.details.statusDate}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Application Status:
                <select
                  name="statusName"
                  value={this.state.details.statusName}
                  onChange={this.formFieldChangeHandler}
                >
                  <option selected value="pending">
                    Pending
                  </option>
                  <option value="applied">Applied</option>
                  <option value="interviewed">Interviewed</option>
                  <option value="offer_received">Offer Received</option>
                  <option value="rejected">Rejected</option>
                  <option value="dropped">Dropped</option>
                  <option value="accepted">Accepted</option>
                </select>
              </label>
              <label>
                Post Source:
                <select
                  name="postSource"
                  value={this.state.details.postSource}
                  onChange={this.formFieldChangeHandler}
                >
                  <option selected value="friend">
                    Friend
                  </option>
                  <option value="internet">Internet</option>
                </select>
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={this.state.details.description}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Notes:
                <textarea
                  name="notes"
                  value={this.state.details.notes}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <button type="submit" onClick={this.handleSubmit}>
                Add Job
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={this.props.onClose}
              className="modalCloseButton"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateJobApplicationModal);
