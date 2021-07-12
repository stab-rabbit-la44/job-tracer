import React from 'react';
import Application from '../components/Application';

const ApplicationList = (props) => {
  return (
    <div>
      <h2>Application List</h2>
      <div>
        {props.jobApps.map((application) => (
          <Application
            key={application.id}
            id={application.id}
            companyName={application.company_name}
            jobTitle={application.job_title}
            status={application.status_id}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
