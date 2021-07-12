import React from 'react';

const Market = (props) => (
  <div>
    <span>{props.companyName}</span>
    <span>{props.jobTitle}</span>
    <span>{props.status}</span>
    <button type="button" onClick={() => console.log('edit button here')}>
      Edit
    </button>
    <button type="button" onClick={() => console.log('delete button here')}>
      Delete
    </button>
  </div>
);

export default Market;
