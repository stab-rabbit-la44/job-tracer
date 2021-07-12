import React from 'react';
import JobApplication from '../components/JobApplication';

export default class JobApplicationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Application List</h2>
        <div>
          {this.props.jobApps.map((application) => (
            <JobApplication
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
  }
}
