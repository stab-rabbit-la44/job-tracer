import React from 'react';

export default function Application() {
  return (
    <div>
      <span>Company Name</span>
      <span>Job Title</span>
      <span>Status</span>
      <button type="button" onClick={() => console.log('edit button here')}>
        Edit
      </button>
      <button type="button" onClick={() => console.log('delete button here')}>
        Delete
      </button>
    </div>
  );
}
