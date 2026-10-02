import { useNavigate } from "react-router-dom";
import collegeImage from "../assets/college.jpg";
import "../css/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${collegeImage})`,
      }}
    >
      <div className="hero-content">
        <h1>Welcome to Andhra Polytechnic, Kakinada</h1>

        <p>
          Empowering Students Through Technical Education
        </p>

        <p>
          Andhra Polytechnic, Kakinada is committed to providing quality
          technical education and creating skilled professionals for the future.
        </p>

        <button onClick={() => navigate("/registration")}>
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Home;