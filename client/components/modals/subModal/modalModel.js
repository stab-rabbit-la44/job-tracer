import React from 'react';
import JobApplication from './jobApplication.js';

class ModalModel extends React.Component {
  constructor(props) {
    super(props);
  };
    
  render() {
    return (
      <div className="modal list">
        <div className="modal-content">
          <JobApplication
            details={this.state.details}
            formFieldChangeHandler={this.formFieldChangeHandler}
            handleSubmit={(e)=>this.handleSubmit(e)}
            onClose={this.props.onClose}
          />
        </div>
      </div>
    );
  }
}

export default ModalModel;
