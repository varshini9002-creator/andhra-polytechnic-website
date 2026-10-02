import "../css/Help.css";

const Help=()=> {
  return (
    <div className="help-page">

      <div className="help-header">
        <h1>Help & Support</h1>
        <p>
          Find answers to common questions about our website.
        </p>
      </div>

      <div className="help-container">

        <div className="faq-card">
          <h2>How can I register?</h2>
          <p>
            Go to the Registration page from the navigation bar, fill in your
            details, and click Submit Registration.
          </p>
        </div>

        <div className="faq-card">
          <h2>Where can I see registered students?</h2>
          <p>
            Select Registered Students from the navigation bar to view the
            submitted registration details.
          </p>
        </div>

        <div className="faq-card">
          <h2>Can I delete a registration?</h2>
          <p>
            Yes. The Registered Students page provides a Delete button for
            removing a registration.
          </p>
        </div>

        <div className="faq-card">
          <h2>Where is my registration data stored?</h2>
          <p>
            Registration details are stored in your browser's local storage.
            This website does not use a database or backend server.
          </p>
        </div>

      </div>

      <div className="contact-section">
        <h2>Need More Help?</h2>

        <p>
          For further assistance, please contact the college office or
          concerned department.
        </p>
      </div>

    </div>
  );
}

export default Help;