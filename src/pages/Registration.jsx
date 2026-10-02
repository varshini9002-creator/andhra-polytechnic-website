import { useState } from "react";
import "../css/Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingRegistrations =
      JSON.parse(localStorage.getItem("registrations")) || [];

    existingRegistrations.push(formData);

    localStorage.setItem(
      "registrations",
      JSON.stringify(existingRegistrations)
    );

    alert("Registration successful!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      year: "",
      gender: "",
      address: "",
    });
  };

  return (
    <div className="registration-page">
      <div className="registration-header">
        <h1>Student Registration</h1>
        <p>Register with Andhra Polytechnic, Kakinada</p>
      </div>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Engineering">
              Computer Engineering
            </option>
            <option value="Civil Engineering">
              Civil Engineering
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Automobile Engineering">
              Automobile Engineering
            </option>
            <option value="Electronics & Communication Engineering">
              Electronics & Communication Engineering
            </option>
            <option value="Electrical & Electronics Engineering">
              Electrical & Electronics Engineering
            </option>
            <option value="Architectural Assistantship">
              Architectural Assistantship
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit Registration
        </button>
      </form>
    </div>
  );
}

export default Registration;