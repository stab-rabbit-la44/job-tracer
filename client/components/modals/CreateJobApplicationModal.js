/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import ModalModel from './subModal/modalModel';

const mapDispatchToProps = (dispatch) => ({
  addJobApplication: (newJobApplication) =>
    dispatch(actions.addJobApplication(newJobApplication)),
  loadJobApplications: () => dispatch(actions.loadJobApplications),
});

class CreateJobApplicationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        companyName: '',
        jobTitle: '',
        salary: '',
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
    this.props.loadJobApplications();
    this.setState({
      details: {
        companyName: '',
        jobTitle: '',
        salary: '',
        postSource: '',
        description: '',
        statusName: '',
        notes: '',
        statusDate: '',
        favorite: false,
      },
    });
    this.props.onClose();
  }

  formFieldChangeHandler(event) {
    const { details } = this.state;
    console.log(event.target.name)
    details[event.target.name] = event.target.value;
    this.setState({ details });
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    // onClose={() => setShow(false)}
    // show={show}
    // addJobApplication={addJobApplication}
    return (
      // ModalModel(whaterver props)
      <ModalModel
        details={this.state.details}
        formFieldChangeHandler={this.formFieldChangeHandler}
        handleSubmit={(e)=>this.handleSubmit(e)}
        onClose={this.props.onClose}
      />

      // <div className="modal list">
      //   <div className="modal-content">
      //     <div className="modal-header">
      //       <h4 className="modal-title">Create Job Application</h4>
      //     </div>
      //     <div className="modal-body">
      //       <form>
      //         <label>
      //           Favorite?:
      //           <select
      //             defaultValue={this.state.details.favorite}
      //             name="favorite"
      //             onChange={this.formFieldChangeHandler}
      //           >
      //             <option value="false">No</option>
      //             <option value="true">Yes</option>
      //           </select>
      //         </label>
      //         <label>
      //           Company Name:
      //           <input
      //             type="text"
      //             name="companyName"
      //             value={this.state.details.companyName}
      //             onChange={this.formFieldChangeHandler}
      //           />
      //         </label>
      //         <label>
      //           Job Title:
      //           <input
      //             type="text"
      //             name="jobTitle"
      //             value={this.state.details.jobTitle}
      //             onChange={this.formFieldChangeHandler}
      //           />
      //         </label>
      //         <label>
      //           Salary:
      //           <input
      //             type="text"
      //             name="salary"
      //             value={this.state.details.salary}
      //             onChange={this.formFieldChangeHandler}
      //           />
      //         </label>
      //         <label>
      //           Application Status Date:
      //           <input
      //             type="date"
      //             name="statusDate"
      //             value={this.state.details.statusDate}
      //             onChange={this.formFieldChangeHandler}
      //           />
      //         </label>
      //         <label>
      //           Application Status:
      //           <select
      //             defaultValue={this.state.details.statusName}
      //             name="statusName"
      //             onChange={this.formFieldChangeHandler}
      //           >
      //             <option value="pending">Pending</option>
      //             <option value="applied">Applied</option>
      //             <option value="interviewed">Interviewed</option>
      //             <option value="offer_received">Offer Received</option>
      //             <option value="rejected">Rejected</option>
      //             <option value="dropped">Dropped</option>
      //             <option value="accepted">Accepted</option>
      //           </select>
      //         </label>
      //         <label>
      //           Post Source:
      //           <select
      //             defaultValue={this.state.details.postSource}
      //             name="postSource"
      //             onChange={this.formFieldChangeHandler}
      //           >
      //             <option value="friend">Friend</option>
      //             <option value="internet">Internet</option>
      //           </select>
      //         </label>
      //         <label>
      //           Description:
      //           <textarea
      //             name="description"
      //             value={this.state.details.description}
      //             onChange={this.formFieldChangeHandler}
      //           />
      //         </label>
      //         <label>
      //           Notes:
      //           <textarea
      //             name="notes"
      //             value={this.state.details.notes}
      //             onChange={this.formFieldChangeHandler}
      //           />
      //         </label>
      //         <button
      //           className="btn btn-add"
      //           type="submit"
      //           onClick={this.handleSubmit}
      //         >
      //           Add Job
      //         </button>
      //       </form>
      //     </div>
      //     <div className="modal-footer">
      //       <button
      //         className="btn btn-close"
      //         type="button"
      //         onClick={this.props.onClose}
      //       >
      //         Close
      //       </button>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateJobApplicationModal);
