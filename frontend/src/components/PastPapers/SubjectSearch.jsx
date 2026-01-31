import React from 'react';
import './SubjectSearch.css';

const SubjectSearch = (props) => {
  return (
    <div className="search-container">
      <h1>Past Papers</h1>
      <p>Finding past papers during exams is tough, so here they are – all in one place.</p>
      <input
        type="text"
        value={props.input}
        onChange={props.onChange}
        placeholder="Search Subject"
      />
    </div>
  );
};

export default SubjectSearch;



// The Flow (Trigger Chain)

// User types in search box → onChange event fires.
// That calls handleChange (from parent).
// setSubjectInput(value) updates state in parent.
// State update causes React to re-render SubjectList.
// During re-render, filteredSubjects is recalculated.
// Updated subjectInput is passed again as a prop to SubjectSearch.
// The input box shows new text (controlled component).
// Cards display updates based on filteredSubjects.
