// components/StudentForm.jsx
import { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    rollNo: '',
    subject: '',
    marks: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/api/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log('Saved:', data);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 rounded shadow pastel-bg">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form-control mb-2" />
      <input name="class" placeholder="Class" value={formData.class} onChange={handleChange} className="form-control mb-2" />
      <input name="rollNo" placeholder="Roll No" type="number" value={formData.rollNo} onChange={handleChange} className="form-control mb-2" />
      <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="form-control mb-2" />
      <input name="marks" placeholder="Marks" type="number" value={formData.marks} onChange={handleChange} className="form-control mb-3" />
      <button type="submit" className="btn btn-primary w-100">Save</button>
    </form>
  );
};

export default StudentForm;