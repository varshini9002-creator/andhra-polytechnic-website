import "../css/About.css";

const About=()=> {
  return (
    <div className="about-page">

      <div className="about-header">
        <h1>About Andhra Polytechnic</h1>
        <p>
          Empowering students through quality technical education.
        </p>
      </div>

      <section className="about-content">
        <h2>About Our College</h2>

        <p>
          Andhra Polytechnic, Kakinada is a technical educational institution
          dedicated to providing students with quality education and practical
          knowledge. The institution focuses on developing technical skills,
          creativity, discipline, and professional values among students.
        </p>

        <p>
          Students are provided with opportunities to gain theoretical
          knowledge along with practical experience through laboratories,
          workshops, technical activities, seminars, and other educational
          programs.
        </p>

        <p>
          Our goal is to prepare students with the knowledge and skills needed
          to pursue higher education and build successful careers in the
          technical field.
        </p>
      </section>

      <section className="about-cards">

        <div className="about-card">
          <h3>Quality Education</h3>
          <p>
            Providing students with strong technical knowledge and practical
            learning opportunities.
          </p>
        </div>

        <div className="about-card">
          <h3>Practical Learning</h3>
          <p>
            Encouraging students to gain hands-on experience through
            laboratories, workshops, and projects.
          </p>
        </div>

        <div className="about-card">
          <h3>Student Development</h3>
          <p>
            Supporting students in developing technical, communication, and
            professional skills.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;