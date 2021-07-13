import React, { useState } from 'react';
import EditJobApplicationModal from './modals/EditJobApplicationModal';

const JobApplication = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {props.companyName && (
        <div className="job-application">
          <div className="row space-around">
            <p>{props.companyName}</p>
            <p className="ml">{props.jobTitle}</p>
            <p className="ml">{props.status}</p>
          </div>
          <button
            className="btn btn-close"
            type="button"
            onClick={() => setShow(true)}
          >
            Edit
          </button>
          <EditJobApplicationModal
            jobAppId={props.id}
            onClose={() => setShow(false)}
            show={show}
          />
          <button
            className=" btn btn-delete"
            type="button"
            onClick={() => props.deleteJobApplication(props.id)}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default JobApplication;
