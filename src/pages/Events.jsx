import "../css/Events.css";

function Events() {
  return (
    <div className="events-page">

      <div className="events-header">
        <h1>College Events</h1>

        <p>
          Discover the events, activities, and opportunities at
          Andhra Polytechnic, Kakinada.
        </p>
      </div>

      <div className="events-container">

        <div className="event-card">
          <div className="event-icon">🎉</div>
          <h2>Tech Fest</h2>
          <p>
            A celebration of student talent, creativity, culture,
            and entertainment.
          </p>
          <span>Annual Event</span>
        </div>

        <div className="event-card">
          <div className="event-icon">🛠️</div>
          <h2>AI & ML Workshops</h2>
          <p>
            Hands-on workshops that help students develop practical
            and technical skills on Artificial Intelligence and Machine Learning
          </p>
          <span>Technical</span>
        </div>

        <div className="event-card">
          <div className="event-icon">🏆</div>
          <h2>Sports Meet</h2>
          <p>
            Various indoor and outdoor sports activities encouraging
            teamwork and healthy competition.
          </p>
          <span>Sports</span>
        </div>

        <div className="event-card">
          <div className="event-icon">🎭</div>
          <h2>Cultural Events</h2>
          <p>
            Opportunities for students to showcase their cultural
            talents through music, dance, and performances.
          </p>
          <span>Cultural</span>
        </div>

        <div className="event-card">
          <div className="event-icon">💡</div>
          <h2>Project Exhibition</h2>
          <p>
            Students present innovative projects and demonstrate
            their technical knowledge and creativity.
          </p>
          <span>Innovation</span>
        </div>

        <div className="event-card">
          <div className="event-icon">🎓</div>
          <h2>Seminars & Guest Lectures</h2>
          <p>
            Interactive sessions with experts to provide students
            with industry knowledge and career guidance.
          </p>
          <span>Learning</span>
        </div>

      </div>

    </div>
  );
}

export default Events;