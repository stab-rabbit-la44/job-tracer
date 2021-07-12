import React, { useState } from 'react';
import EditJobApplicationModal from './modals/EditJobApplicationModal';

const JobApplication = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <span>{props.companyName}</span>
      <span>{props.jobTitle}</span>
      <span>{props.status}</span>
      <button type="button" onClick={() => setShow(true)}>
        Edit
      </button>
      <EditJobApplicationModal
        jobAppId={props.id}
        onClose={() => setShow(false)}
        show={show}
      />
      <button
        type="button"
        onClick={() => props.deleteJobApplication(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default JobApplication;
