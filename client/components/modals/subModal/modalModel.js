import React from 'react';

class ModalModel extends React.Component {
  render() {
    return (
      <div className="modal list">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Job Application</h4>
          </div>
          <div className="modal-body">
            <form>
              <label>
                Favorite:
                <select
                  defaultValue={this.props.details.favorite}
                  name="favorite"
                  onChange={this.props.formFieldChangeHandler}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </label>
              <label>
                Company Name:
                <input
                  type="text"
                  name="companyName"
                  value={this.props.details.companyName}
                  onChange={this.props.formFieldChangeHandler}
                />
              </label>
              <label>
                Job Title:
                <input
                  type="text"
                  name="jobTitle"
                  value={this.props.details.jobTitle}
                  onChange={this.props.formFieldChangeHandler}
                />
              </label>
              <label>
                Salary:
                <input
                  type="text"
                  name="salary"
                  value={this.props.details.salary}
                  onChange={this.props.formFieldChangeHandler}
                />
              </label>
              <label>
                Application Status Date:
                <input
                  type="date"
                  name="statusDate"
                  value={this.props.details.statusDate}
                  onChange={this.props.formFieldChangeHandler}
                />
              </label>
              <label>
                Application Status:
                <select
                  defaultValue={this.props.details.statusName}
                  name="statusName"
                  onChange={this.props.formFieldChangeHandler}
                >
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
                <select
                  defaultValue={this.props.details.postSource}
                  name="postSource"
                  onChange={this.props.formFieldChangeHandler}
                >
                  <option value="friend">Friend</option>
                  <option value="internet">Internet</option>
                </select>
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={this.props.details.description}
                  onChange={this.props.formFieldChangeHandler}
                />
              </label>
              <label>
                Notes:
                <textarea
                  name="notes"
                  value={this.props.details.notes}
                  onChange={this.props.formFieldChangeHandler}
                />
              </label>
              <button
                className="btn btn-add"
                type="submit"
                onClick={this.props.handleSubmit}
              >
                Add Job
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-close"
              type="button"
              onClick={this.props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalModel;
