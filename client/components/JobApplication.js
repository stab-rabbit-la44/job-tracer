import React from 'react';

const JobApplication = (props) => {
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
            onClick={() => console.log('edit button here')}
          >
            Edit
          </button>
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
