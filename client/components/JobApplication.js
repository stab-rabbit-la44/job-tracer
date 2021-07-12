import React from 'react';

const JobApplication = (props) => (
  <div>
    <span>{props.companyName}</span>
    <span>{props.jobTitle}</span>
    <span>{props.status}</span>
    <button type="button" onClick={() => console.log('edit button here')}>
      Edit
    </button>
    <button type="button" onClick={() => props.deleteJobApplication(props.id)}>
      Delete
    </button>
  </div>
);

export default JobApplication;
