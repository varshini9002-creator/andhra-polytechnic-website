import "../css/Departments.css";

const Departments = () => {
  return (
    <div className="departments-page">

      <div className="departments-header">
        <h1>Our Departments</h1>

        <p>
          Explore the different technical departments at Andhra Polytechnic,
          Kakinada.
        </p>
      </div>

      <div className="departments-container">

        
        <div className="department-card">
          <div className="department-number">01</div>

          <h2>Computer Engineering</h2>

          <p>
            Focuses on programming, software development, web technologies,
            databases, and computer applications.
          </p>

          <button>View Details</button>
        </div>

        
        <div className="department-card">
          <div className="department-number">02</div>

          <h2>Civil Engineering</h2>

          <p>
            Covers construction, structural design, surveying, transportation,
            and infrastructure development.
          </p>

          <button>View Details</button>
        </div>

       
        <div className="department-card">
          <div className="department-number">03</div>

          <h2>Mechanical Engineering</h2>

          <p>
            Provides knowledge of machines, manufacturing, thermodynamics,
            and mechanical systems.
          </p>

          <button>View Details</button>
        </div>

        
        <div className="department-card">
          <div className="department-number">04</div>

          <h2>Automobile Engineering</h2>

          <p>
            Focuses on automobile design, vehicle maintenance, automotive
            systems, engines, manufacturing, and modern vehicle technologies.
          </p>

          <button>View Details</button>
        </div>

   
        <div className="department-card">
          <div className="department-number">05</div>

          <h2>Electronics & Communication Engineering</h2>

          <p>
            Covers electronics, communication systems, digital technologies,
            and electronic devices.
          </p>

          <button>View Details</button>
        </div>

  
        <div className="department-card">
          <div className="department-number">06</div>

          <h2>Electrical & Electronics Engineering</h2>

          <p>
            Focuses on electrical systems, power generation, electrical
            machines, and electronic technologies.
          </p>

          <button>View Details</button>
        </div>


        <div className="department-card">
          <div className="department-number">07</div>

          <h2>Architectural Assistantship</h2>

          <p>
            Focuses on architectural drawing, building design, construction
            technology, surveying, CAD, and space planning.
          </p>

          <button>View Details</button>
        </div>

      </div>
    </div>
  );
}

export default Departments;