import { useEffect, useState } from "react";
import "../css/Registrations.css";

const Registrations=()=> {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const savedRegistrations =
      JSON.parse(localStorage.getItem("registrations")) || [];

    setRegistrations(savedRegistrations);
  }, []);

  const handleDelete = (index) => {
    const updatedRegistrations = registrations.filter(
      (_, i) => i !== index
    );

    localStorage.setItem(
      "registrations",
      JSON.stringify(updatedRegistrations)
    );

    setRegistrations(updatedRegistrations);
  };

  return (
    <div className="registrations-page">
      <div className="registrations-header">
        <h1>Registered Students</h1>
        <p>View all student registrations</p>
      </div>

      {registrations.length === 0 ? (
        <div className="no-registrations">
          <p>No registrations found.</p>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Year</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {registrations.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>{student.gender}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Registrations;