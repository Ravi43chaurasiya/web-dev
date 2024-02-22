// App.js
import React, { useState } from 'react';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import './App.css'


function App() {
  const [students, setStudents] = useState([
    // { id: '1', name: 'ravi', grade: 'A' },
    // { id: '2', name: 'rahul', grade: 'B+' }
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
    toggleForm(); // Hide the form after adding a student
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div id='container'>
      <h2>Student Details</h2>
      <StudentTable className='table' students={students} />
      <div className="add-info-container">
        <button onClick={toggleForm}>Add Info</button>
        <div id="add-info-form" style={{ display: showForm ? 'block' : 'none' }}>
          <StudentForm onAddStudent={handleAddStudent} />
        </div>
      </div>
    </div>
  );
}

export default App;
