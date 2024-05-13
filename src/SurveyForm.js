import React, { useState } from 'react';

function SurveyForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    feedback: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation logic before submitting
    setFormSubmitted(true);
    console.log('Form Submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      age: '',
      gender: '',
      feedback: '',
    });
  };

  return (
    <div>
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && <p>Thank you for your feedback!</p>}
    </div>
  );
}

export default SurveyForm;
