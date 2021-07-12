/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

const data = {
  companyName: 'From the Frontend LLC',
  jobTitle: 'president',
  salary: 9000,
  // status: 'offer',
  description: 'test from postman',
  postSource: 'friend',
  notes: 'nothing to report, carry on',
  favorite: true,
};

const mapDispatchToProps = (dispatch) => ({
  addJobApplication: () => dispatch(actions.addJobApplication(data)),
});

class CreateJobApplicationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addJobApplication(data);
    console.log(this.props.history);
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
            <form>
              <label>
                Favorite?:
                <select>
                  <option selected value="false">
                    No
                  </option>
                  <option value="true">Yes</option>
                </select>
              </label>
              <label>
                Company Name:
                <input type="text" />
              </label>
              <label>
                Job Title:
                <input type="text" />
              </label>
              <label>
                Salary:
                <input type="text" />
              </label>
              <label>
                Application Status:
                <select defaultValue="pending">
                  <option value="pending">Pending</option>
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
                <select defaultValue="friend">
                  <option value="friend">Friend</option>
                  <option value="internet">Internet</option>
                </select>
              </label>
              <label>
                Description:
                <textarea />
              </label>
              <label>
                Notes:
                <textarea />
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
